import { useState } from "react"
import axios from 'axios';
import AboutUs from "./AboutUs";
import { Link } from "react-router-dom";


export default function Simple() {

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("")
    const [isAuth, setAuth] = useState("false")

    async function formSubmit(e) {
        e.preventDefault();
        console.log(email, password)

        try {
            const response = await axios.post('/api/signup', {
                email: email,
                password: password,
            });

            localStorage.setItem("jwt", response.data.user);
            console.log(response.data.user);
            setAuth("true");

        } catch (err) {
            console.log(err);
        }
    }

    if (isAuth == "true") {
        return (<AboutUs />)
    }

    return (
        <div className=" flex items-center justify-center text-white h-screen">
            <div className="flex items-center justify-center p-10 rounded-xl gap-3 bg-[#282c34] bg-opacity-[70%] flex-col ">
                <div className="  font-fedroka text-xl text-left font-medium ">
                    SIGN UP
                </div>
                <button className=" cursor-pointer flex font-nunito border-3 border-cyan-400 rounded-3xl py-1 px-3">Continue with Google</button>
                <div className=" font-nunito text-gray-400 ">----or sign in with email----</div>
                <div>
                    <form onSubmit={formSubmit} className=" flex gap-3 flex-col">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className=" font-nunito ">Email : </label>
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className=" form-input text-black rounded-md" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="pass" className=" font-nunito ">Password : </label>
                            <input type="text" value={password} onChange={(e) => { setPass(e.target.value) }} className=" form-input text-black rounded-md" required />
                        </div>

                        <div className="flex content-between gap-3">
                            <div className="flex">
                                <input type="checkbox" className=" form-checkbox rounded bg-cyan-400 text-white cursor-pointer " />
                                <p className=" font-nunito text-xs">Remember Me?</p>
                            </div>
                            <Link to="/" className=" font-nunito text-cyan-400 text-xs cursor-pointer">Forgot password?</Link>
                        </div>

                        <button className=" cursor-pointer bg-cyan-400 text-[#282c34] font-fedroka font-semibold rounded-2xl py-1" type="submit">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

