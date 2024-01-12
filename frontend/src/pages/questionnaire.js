import { useState } from "react";
import axios from "axios"
import AboutUs from "./AboutUs"
import useAuthContext from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

const Questionnaire = () => {

    const { isAuthenticated } = useAuthContext();

    const [answers, setAns] = useState({
        job: "Student",
        goal: "Academics",
        sleep: "8",
        sittingHour: "2",
    });

    const QUESTIONS = [
        "What is your profession?",
        "What goals are you planning to achieve?",
        "How many hours do you sleep?",
        "What is your average sitting hour?",
    ]

    function onOptionChange(key, value) {
        setAns(prevAns => ({
            ...prevAns,
            [key]: value,
        }))
    }

    async function infoSubmit() {
        console.log(answers)
        try {
            const response = await axios.post('/api/info', {
                info: answers
            });
            if (response.status === 201) {
                return (<AboutUs />)
            }
        } catch (err) {
            console.log(err)
        }
    }

    if (!isAuthenticated) {
        return <Navigate to="/form" />
    }

    return (
        <>
            <div className=" font-oswald font-bold uppercase">
                HELLO USER,
            </div>

            <div>
                <div>{QUESTIONS[0]}</div>
                <div>
                    <select onChange={(e) => onOptionChange("job", e.target.value)}>
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Driver">Driver</option>
                    </select>
                </div>

                <div>{QUESTIONS[1]}</div>
                <div>
                    <select onChange={(e) => onOptionChange("goal", e.target.value)}>
                        <option value="Academics">Academics</option>
                        <option value="Self Improvement">Self Improvement</option>
                    </select>
                </div >

                <div>{QUESTIONS[2]}</div>
                <div>
                    <select onChange={(e) => onOptionChange("sleep", e.target.value)}>
                        <option value="6">6 hours</option>
                        <option value="8">8 hours</option>
                        <option value="10">10 hours</option>
                    </select>
                </div >

                <div>{QUESTIONS[3]}</div>
                <div>
                    <select onChange={(e) => onOptionChange("sittingHour", e.target.value)}>
                        <option value="2">2 hours</option>
                        <option value="3">3 hours</option>
                        <option value="1">1 hour</option>
                        <option value="0.5">half an hour</option>
                        <option value="1.5">1 and a half hour</option>
                    </select>
                </div >
            </div >

            <div onClick={infoSubmit}>SUBMIT</div>
        </>
    )
}
export default Questionnaire;