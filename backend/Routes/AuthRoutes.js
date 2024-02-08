const { Router } = require("express")
const { info , info_get} = require("../controllers/InfoController")
const { signup, logout, login_post } = require("../controllers/AuthController")
const { isAuthenticated } = require("../middleware/isAuthenticated")

const router = Router();

router.get("/", (req, res) => res.json({ "status": "connected to backend" }))

router.post('/api/signup', signup)
router.post('/api/info', info)
router.post('/api/infoget', info_get)
router.post("/api/login", login_post)

router.get("/api/logout", logout)
router.get("/api/isAuth", isAuthenticated)


module.exports = router