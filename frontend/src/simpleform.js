import react, { useState } from "react"
import axios from 'axios';


export default function Simple() {

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("")

    async function formSubmit(e) {
        e.preventDefault();
        console.log(email, password)


        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await res.json();
            console.log(data);
            //     const response = await axios.post('/login', {
            //         email: email,
            //         password: password,
            //     });

            //     const data = response.data;
            //     console.log(data);

        } catch (err) {
            console.error(err);
        }

    }

    return (
        <>
            <div className="bg-slate-900 text-white h-screen">

                <form onSubmit={formSubmit}>
                    <label htmlFor="email">Email : </label>
                    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} className=" text-black" required />
                    <br />
                    <label htmlFor="pass">password : </label>
                    <input type="text" value={password} onChange={(e) => { setPass(e.target.value) }} className="text-black" required />
                    <br />
                    <button className=" border-3 border-white p-3" type="submit">Submit</button>
                </form >
            </div >
        </>
    )
}