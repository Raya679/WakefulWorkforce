import { useState } from "react";
import axios from "axios"
import useAuthContext from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

const Questionnaire = () => {

    const { isAuthenticated } = useAuthContext();
    console.log(isAuthenticated)

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
                return <Navigate to="/aboutus" />
            }
        } catch (err) {
            console.log(err)
        }
    }

    if (isAuthenticated === false) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <div className="flex flex-col gap-3 p-3 m-4 ">
                <div className=" font-oswald font-bold text-[50px] uppercase">
                    HELLO ASPIRANT,
                </div>

                <div className="flex flex-col gap-3">
                    <div>
                        <div className=" font-oswald text-xl py-1">{QUESTIONS[0]}</div>
                        <div>
                            <select onChange={(e) => onOptionChange("job", e.target.value)} className=" bg-slate-900 rounded border-white w-full" >
                                <option value="Student" >Student</option>
                                <option value="Teacher">Teacher</option>
                                <option value="Driver">Driver</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className=" font-oswald text-xl py-1">{QUESTIONS[1]}</div>
                        <div>
                            <select onChange={(e) => onOptionChange("goal", e.target.value)} className=" bg-slate-900 rounded border-white w-full">
                                <option value="Academics">Academics</option>
                                <option value="Self Improvement">Self Improvement</option>
                            </select>
                        </div >
                    </div>

                    <div>
                        <div className=" font-oswald text-xl py-1">{QUESTIONS[2]}</div>
                        <div>
                            <select onChange={(e) => onOptionChange("sleep", e.target.value)} className=" bg-slate-900 rounded border-white w-full">
                                <option value="6">6 hours</option>
                                <option value="8">8 hours</option>
                                <option value="10">10 hours</option>
                            </select>
                        </div >
                    </div>

                    <div>
                        <div className=" font-oswald text-xl py-1">{QUESTIONS[3]}</div>
                        <div>
                            <select onChange={(e) => onOptionChange("sittingHour", e.target.value)} className=" bg-slate-900 rounded border-white w-full">
                                <option value="2">2 hours</option>
                                <option value="3">3 hours</option>
                                <option value="1">1 hour</option>
                                <option value="0.5">half an hour</option>
                                <option value="1.5">1 and a half hour</option>
                            </select>
                        </div >
                    </div>
                </div >

                <div onClick={infoSubmit} className=" bg-cyan-200 w-min px-3 py-2 rounded-xl text-slate-900 my-3 self-center font-bold font-oswald text-xl">SUBMIT</div>
            </div>
        </>
    )
}
export default Questionnaire;