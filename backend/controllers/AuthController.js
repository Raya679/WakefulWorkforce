const User = require("../Models/User")
const createToken = require("../Utils/makeToken")
require("dotenv").config()

module.exports.signup = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.create({ email, password })
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: process.env.JWT_EXPIRE * "1000" });

        res.status(201).json({ user: user._id })
    } catch (err) {
        console.log(err)
        res.status(400).send("Bad request")
    }
}