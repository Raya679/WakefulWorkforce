import { useState } from "react"
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";


export default function Simple({ login }) {

    const { isAuthenticated, setAuthenticated } = useAuthContext();

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("")
    const [error, setError] = useState([""])
    const [showPassword, setShowPassword] = useState(false);
    async function formSubmit(e) {
        e.preventDefault();
        console.log(email, password)

        try {
            const response = await axios.post(login ? `${process.env.REACT_APP_EXPRESS_URL}/api/login` : `${process.env.REACT_APP_EXPRESS_URL}/api/signup`, {
                email: email,
                password: password,

            }, { withCredentials: true });
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
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const form = e.target.form;
            const index = Array.from(form.elements).indexOf(e.target);
            const nextElement = form.elements[index + 1];

            if (nextElement) {
                nextElement.focus();
            }
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col py-3 px-5 rounded-xl gap-3 border-cyan-400 border-3 w-3/4 max-w-lg mt-28 h-3/4">
                <div className="text-4xl font-bold my-3 flex items-center justify-center">
                    {login ? 'LOGIN' : 'SIGN UP'}
                </div>
                <button className="ml-16 text-1xl font-bold cursor-pointer border-1 border-cyan-400 rounded-3xl py-2 px-3 hover:bg-cyan-400 hover:text-slate-900 w-72">
                    Continue with Google
                </button>
                <div className="text-gray-400 text-center">
                    {login ? '----or login with email----' : '----or sign up with email----'}
                </div>
                <div className="self-start ml-14">
                    <form onSubmit={formSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col  -ml-2 " onKeyDown={handleKeyDown}>
                                <label htmlFor="email" className="font-bold w-80">Email : </label>
                                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-input text-white -ml-2 rounded-3xl bg-sky-950 border-cyan-400 border-3 w-full" required />
                            </div>                        
                        <div className="flex flex-col -ml-2">
                            <label htmlFor="pass" className="font-bold w-80 ">Password : </label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => { setPass(e.target.value) }} className="form-input -ml-2 text-white rounded-3xl bg-sky-950 border-cyan-400 border-3 w-full mr-12" required />
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer text-sm text-gray-400"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>
                        <div className="flex content-between gap-5 py-2">
                            <div className="flex">
                                <input type="checkbox" className="form-checkbox rounded bg-cyan-400 text-white cursor-pointer mx-1" />
                                <p className="text-xs">Remember Me?</p>
                            </div>
                            <Link to="/" className="text-cyan-400 text-xs cursor-pointer ml-16">Forgot password?</Link>
                        </div>
                        <button
                            className="cursor-pointer self-center bg-cyan-400 text-slate-900 font-semibold rounded-3xl px-4 py-2 hover:text-cyan-400 hover:bg-slate-900 ml-56"
                            type="submit"
                            onClick={formSubmit}
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="text-red">{error.map((err, index) => <p key={index}>{err}</p>)}</div>
                <div className="text-gray-500">
                    {login ? (
                        <p className="text-gray-400 flex items-center justify-center">
                            Don't have an account?
                            <Link
                                to="/signup"
                                className="text-cyan-400 cursor-pointer font-bold ml-1"
                            >
                                Sign Up
                            </Link>
                        </p>
                    ) : (
                        <p className="text-gray-400 flex items-center justify-center">
                            Already have an account?
                            <Link to="/login" className="text-cyan-400 cursor-pointer">
                                {' '}
                                Log In
                            </Link>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

