const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")
const Schema = require("mongoose")

const TodoSchema = new mongoose.Schema({
    user_id: {
        type:ObjectId
    },
    list: {
        type: [String],
    },
    day: { type: String, required: true },
    month: { type: String, required: true },
    year: { type: String, required: true }

})

const Todo = mongoose.model("Todo", TodoSchema)
module.exports = Todo;