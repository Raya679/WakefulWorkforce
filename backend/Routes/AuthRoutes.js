const { Router } = require("express")
const { login } = require("../controllers/AuthController")

const router = Router();

router.get("/", (req, res) => res.json({ "status": "connected" }))
router.post('/api/login', login)
router.get('/api/login', (req, res) => { res.send("CONNE") })

module.exports = router