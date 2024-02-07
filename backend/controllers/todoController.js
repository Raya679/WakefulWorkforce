const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken")
const Todo = require("../Models/Todo")


module.exports.todo_post = async (req, res) => {
    const { list, day, month, year } = req.body
    try {
        const iD = new ObjectId(jwt.decode(req.cookies.jwt))
        // console.log(iD)
        let todo = await Todo.findOne({user_id:iD ,day, month, year })
        if (todo) {
            todo = await todo.updateOne({ list }, { new: true })
        } else {
            todo = await Todo.create({ user_id: iD, list, day, month, year })
        }
        res.status(201).json({ "message": todo })

    } catch (err) {
        console.log(err)
        res.status(500).json({ "message": "error" })
    }
}

module.exports.todo_get = async (req, res) => {
    const { day, month, year } = req.query
    const token = req.cookies.jwt;
    if (token) {
            try {
            const iD = new ObjectId(jwt.decode(token))
            console.log(iD)
            const todo = await Todo.findOne({ user_id: iD, day, month, year })
            res.status(200).json({ todo })
            console.log("hello")
        }  catch (err) {
            res.status(500).json({ todo: null })
        }
        
    }
    
}