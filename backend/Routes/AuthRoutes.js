const { Router } = require("express")
const { info } = require("../controllers/InfoController")
const { signup } = require("../controllers/AuthController")
const { isAuthenticated } = require("../middleware/isAuthenticated")

const router = Router();

router.get("/", (req, res) => res.json({ "status": "connected to backend" }))
router.post('/api/signup', signup)
router.post('/api/info', info)
// router.get("/api/token", isAuthenticated)


module.exports = router