import { useState } from "react"
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";


export default function Simple({ login }) {

    const { isAuthenticated, setAuthenticated } = useAuthContext();

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("")
    const [error, setError] = useState([""])

    async function formSubmit(e) {
        e.preventDefault();
        console.log(email, password)

        try {
            const response = await axios.post(login ? '/api/login' : '/api/signup', {
                email: email,
                password: password,
            });
            console.log(response.data)
            if (!response.data.user) {
                console.log(response.data.errors)
                setError(response.data.error)
                setAuthenticated(false)
            }
            else {
                console.log(response.data.user);
                setAuthenticated(true)
            }

        } catch (err) {
            // setError([err.response.data.error]);
            console.log(err)
        }
    }

    if (isAuthenticated && !login) {
        return <Navigate to="/questionnaire" />
    }

    if (isAuthenticated && login) {
        return <Navigate to="/dashboard" />
    }

    return (
        <div className=" flex items-center justify-center text-white h-full">
            <div className="flex py-3 px-5 rounded-xl gap-3 border-cyan-400 border-3 flex-col h-2/3 w-1/4 mt-40">
                <div className=" text-3xl font-bold my-3 flex items-center justify-center">
                    {login ? "LOGIN" : "SIGN UP"}
                </div>
                <button className="text-1xl font-bold cursor-pointer border-1 border-cyan-400 rounded-3xl py-2 px-3 hover:bg-cyan-400 hover:text-slate-900 ">Continue with Google</button>
                <div className=" text-gray-400 text-center">{login ? "----or login in with email----" : "----or sign in with email----"}</div>
                <div className=" self-start ml-14">
                    <form onSubmit={formSubmit} className=" flex gap-4 flex-col ">
                        <div className="flex flex-col gap-2 w-full ">
                            <label htmlFor="email" className="font-bold">Email : </label>
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className=" form-input text-white rounded-3xl bg-slate-900 border-cyan-400 border-3" required />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="pass" className="font-bold">Password : </label>
                            <input type="text" value={password} onChange={(e) => { setPass(e.target.value) }} className=" form-input text-white rounded-3xl bg-slate-900 border-cyan-400 border-3" required />
                        </div>

                        <div className="flex content-between gap-5 py-2">
                            <div className="flex">
                                <input type="checkbox" className=" form-checkbox rounded bg-cyan-400 text-white cursor-pointer mx-1" />
                                <p className="text-xs">Remember Me?</p>
                            </div>
                            <Link to="/" className=" text-cyan-400 text-xs cursor-pointer">Forgot password?</Link>
                        </div>

                        <button className=" cursor-pointer self-center bg-cyan-400 text-slate-900 font-semibold rounded-3xl px-4 py-2 hover:text-cyan-400 hover:bg-slate-900" type="submit">Submit</button>
                    </form>
                </div>
                <div className="text-red">{error.map((err) => err)}</div>
                <div className=" text-gray-500">
                    {login ?
                        (
                            <p className=" text-gray-400 flex items-center justify-center">
                                Don't have an account?
                                <Link
                                    to="/signup"
                                    className=" text-cyan-400 cursor-pointer font-bold"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        ) : (
                            <p className=" text-gray-400" >
                                Already have an account?
                                <Link to="/login" className=" text-cyan-400 cursor-pointer" > Log In</Link>
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

