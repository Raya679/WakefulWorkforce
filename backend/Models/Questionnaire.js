const mongoose = require("mongoose");

const QuestionnaireSchema = new mongoose.Schema({
    job: { type: String, required: true },
    goal: { type: String, required: true },
    sleep: { type: String, required: true },
    sittingHour: { type: String, required: true },
});

const Questionnaire = mongoose.model("Questionnaire", QuestionnaireSchema);

module.exports = Questionnaire;
