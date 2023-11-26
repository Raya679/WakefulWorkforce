const { Router } = require("express")
const { signup } = require("../controllers/AuthController")
const { isAuthenticated } = require("../middleware/isAuthenticated")

const router = Router();

router.get("/", (req, res) => res.json({ "status": "connected to backend" }))
router.post('/api/signup', signup)
// router.get("/api/token", isAuthenticated)


module.exports = router