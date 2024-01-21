const { Router } = require("express");
const { questionnaire_post, questionnaire_get } = require("../controllers/QuestionnaireController");

const router = Router();

router.post("/api/questionnaire", questionnaire_post);
router.get("/api/questionnaire", questionnaire_get);

module.exports = router;
