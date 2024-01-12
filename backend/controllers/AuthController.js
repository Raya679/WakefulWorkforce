const User = require("../Models/User")
const bcrypt = require("bcryptjs")
const createToken = require("../Utils/makeToken")
require("dotenv").config()

module.exports.signup = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.create({ email, password })
        const token = createToken(user.id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: process.env.JWT_EXPIRE * "1000" });

        res.status(201).json({ user: user._id })
    } catch (err) {
        console.log(err)
        res.status(400).send("Bad request")
    }
}

module.exports.logout = (req, res) => {
    res.cookie('jwt', "", { httpOnly: true, maxAge: 1 })
    res.status(200).send(false)
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {

            const auth = await bcrypt.compare(password, user.password);

            if (auth) {
                const token = createToken(user.id);

                res.cookie('jwt', token, { httpOnly: true, maxAge: process.env.JWT_EXPIRE * 1000 });

                res.status(201).json({ user: user._id });
            } else {

                console.log("Invalid password");
                res.status(401).json({ user: undefined, error: "Invalid password" });
            }
        } else {
            console.log("User not found");
            res.status(404).json({ user: undefined, error: "User not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ user: undefined, error: "Internal Server Error" });
    }
};