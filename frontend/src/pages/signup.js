import { useState } from "react"
import axios from 'axios';
import AboutUs from "./AboutUs";


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
        <div className="bg-slate-900 text-white h-screen">
            <form onSubmit={formSubmit}>
                <label htmlFor="email">Email : </label>
                <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} className="text-black" required />
                <br />
                <label htmlFor="pass">Password : </label>
                <input type="text" value={password} onChange={(e) => { setPass(e.target.value) }} className="text-black" required />
                <br />
                <button className="border-3 border-white p-3" type="submit">Submit</button>
            </form>
        </div>
    );
}

