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
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (user) {
            const auth = bcrypt.compare(password, user.password)
            if (auth) {
                const token = createToken(user.id);
                res.cookie('jwt', token, { httpOnly: true, maxAge: process.env.JWT_EXPIRE * "1000" });
                res.status(201).json({ user: user._id })
            }
            console.log("Invalid email")
            res.status(204).json({ user: undefined })
        }
        console.log("Invalid username")
        res.status(204).json({ user: undefined })

    } catch (err) {
        console.log(err)
        res.status(400).json({ user: undefined })
    }
}