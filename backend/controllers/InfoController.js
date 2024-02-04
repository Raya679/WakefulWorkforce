const jwt = require("jsonwebtoken")
const { ObjectId } = require("mongodb")
const User = require("../Models/User")
require("dotenv").config()

module.exports.info = async (req, res) => {
    const { info } = req.body
    try {
        const iD = new ObjectId(jwt.decode(req.cookies.jwt))
        const user = await User.findById(iD)
        console.log(user)
        const status = await user.updateOne({ info })
        res.status(201).json({ "user": status })
    } catch (err) {
        console.log(err)
        res.status(400).json({ "user": undefined })
    }
}