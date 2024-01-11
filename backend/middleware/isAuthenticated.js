const jwt = require("jsonwebtoken")


function isAuthenticated(req, res, next) {
    const token = req.cookies.jwt;
    if (token) {
        jwt.sign(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                console.log(err)
                res.status(401).send({ "status": "Not verified" })
                next()
            }
            res.status(200).send({ "token": decodedToken })
            next();
        })
    } else {
        res.status(401).send({ "status": "Not verified" })
    }
}

module.exports = isAuthenticated;