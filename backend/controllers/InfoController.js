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
module.exports.info_get = async (req, res) => {
    const token = req.cookies.jwt;
    if (token) {
        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const userId = decodedToken.id;
            const user = await User.findById(userId);
            if (user) {
                res.status(200).json({ info: user.info });
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(401).json({ error: "Unauthorized" });
    }
};