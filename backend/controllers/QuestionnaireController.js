const Questionnaire = require("../Models/Questionnaire");

module.exports.questionnaire_post = async (req, res) => {
    const { job, goal, sleep, sittingHour } = req.body;
    try {
        let questionnaire = await Questionnaire.findOne({ job, goal, sleep, sittingHour });

        if (questionnaire) {
            questionnaire = await questionnaire.updateOne({ job, goal, sleep, sittingHour }, { new: true });
        } else {
            questionnaire = await Questionnaire.create({ job, goal, sleep, sittingHour });
        }

        res.status(201).json({ "message": questionnaire });
    } catch (err) {
        console.log(err);
        res.status(500).json({ "message": "error" });
    }
};

module.exports.questionnaire_get = async (req, res) => {
   
    try {
        const questionnaire = await Questionnaire.findOne({ job, goal, sleep, sittingHour });
        res.status(200).json({ questionnaire });
    } catch (err) {
        console.log(err);
        res.status(500).json({ questionnaire: null });
    }
};
