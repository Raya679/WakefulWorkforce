const jwt = require("jsonwebtoken")
require("dotenv").config()

function createToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};
module.exports = createToken;

