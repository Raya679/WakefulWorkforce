const mongoose = require("mongoose")
const { isEmail } = require("validator")
const bcrypt = require("bcryptjs")


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter an Email"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "Please enter an valid Email"]
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters'],
    },

    info: {
        type: Map,
        of: String,
        default: undefined
    }
})

UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})


const User = mongoose.model('User', UserSchema)
module.exports = User;
