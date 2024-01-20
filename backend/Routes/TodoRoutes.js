const { Router } = require("express")
const { todo_post, todo_get } = require("../controllers/todoController")

const router = Router();

router.post("/api/todo", todo_post)
router.get("/api/todoALL", todo_get)

module.exports = router