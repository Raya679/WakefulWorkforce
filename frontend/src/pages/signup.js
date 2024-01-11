import { useState } from "react"
import axios from 'axios';
import Questionnaire from "./questionnaire"
import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";


export default function Simple({ login }) {

    const { isAuthenticated, setAuthenticated } = useAuthContext();

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("")

    async function formSubmit(e) {
        e.preventDefault();
        console.log(email, password)

        try {
            const response = await axios.post(login ? '/api/login' : '/api/signup', {
                email: email,
                password: password,
            });

            console.log(response.data.user);
            setAuthenticated(true)

        } catch (err) {
            console.log(err);
        }
    }

    if (isAuthenticated) {
        return (<Questionnaire />)
    }


    return (
        <div className=" flex items-center justify-center text-white h-screen">
            <div className="flex py-3 px-5 rounded-xl gap-3 bg-[#282c34] bg-opacity-[70%] flex-col">
                <div className=" text-3xl font-medium my-3 ">
                    {login ? "LOGIN" : "SIGN UP"}
                </div>
                <button className=" cursor-pointer font-nunito border-3 border-cyan-400 rounded-3xl py-1 px-3 ">Continue with Google</button>
                <div className=" font-nunito text-gray-400 text-center">{login ? "----or login in with email----" : "----or sign in with email----"}</div>
                <div className=" self-start">
                    <form onSubmit={formSubmit} className=" flex gap-3 flex-col py-2 items-start">
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="email" className=" font-nunito ">Email : </label>
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className=" form-input text-black rounded-md" required />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="pass" className=" font-nunito ">Password : </label>
                            <input type="text" value={password} onChange={(e) => { setPass(e.target.value) }} className=" form-input text-black rounded-md" required />
                        </div>

                        <div className="flex content-between gap-5 py-2">
                            <div className="flex">
                                <input type="checkbox" className=" form-checkbox rounded bg-cyan-400 text-white cursor-pointer mx-1" />
                                <p className=" font-nunito text-xs">Remember Me?</p>
                            </div>
                            <Link to="/" className=" font-nunito text-cyan-400 text-xs cursor-pointer">Forgot password?</Link>
                        </div>

                        <button className=" cursor-pointer self-center bg-cyan-400 text-[#282c34] font-fedroka font-semibold rounded-2xl px-4 py-1" type="submit">Submit</button>
                    </form>
                </div>
                <div className=" text-gray-500">
                    {login ?
                        (
                            <p className="font-nunito text-gray-400">
                                Don't have an account?
                                <Link
                                    to="/signup"
                                    className="font-nunito text-cyan-400 cursor-pointer"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        ) : (
                            <p className="font-nunito text-gray-400" >
                                Already have an account?
                                <Link to="/login" className="font-nunito text-cyan-400 cursor-pointer" > Log In</Link>
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
