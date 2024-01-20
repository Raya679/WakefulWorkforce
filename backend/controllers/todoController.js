const { ObjectId } = require("mongodb");
const Todo = require("../Models/Todo")


module.exports.todo_post = async (req, res) => {
    const { list, day, month, year } = req.body
    try {
        let todo = await Todo.findOne({ day, month, year })
        if (todo) {
            todo = await todo.updateOne({ list }, { new: true })
        } else {
            todo = await Todo.create({ list, day, month, year })
        }
        res.status(201).json({ "message": todo })

    } catch (err) {
        console.log(err)
        res.status(500).json({ "message": "error" })
    }
}

module.exports.todo_get = async (req, res) => {
    const { day, month, year } = req.query
    try {
        const todo = await Todo.findOne({ day, month, year })
        res.status(200).json({ todo })


    } catch (err) {
        console.log(err)
        res.status(500).json({ todo: null })
    }
}