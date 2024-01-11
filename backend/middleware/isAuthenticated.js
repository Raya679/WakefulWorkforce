const jwt = require("jsonwebtoken")


module.exports.isAuthenticated = (req, res) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.sign(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                console.log(err)
                res.status(400).send(false)
            }
            res.status(200).send(true)
        })
    } else {
        res.status(200).send(false)
    }
}
