import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom"
import useAuthContext from '../hooks/useAuthContext';


export default function Navbar() {

  const { isAuthenticated, setAuthenticated } = useAuthContext()

  async function handleLogout() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_EXPRESS_URL}/api/logout`)
      setAuthenticated(response.data)
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <nav className='sticky z-10 w-full top-0'>
      <div className='flex items-center px-2 py-2 font-bold bg-slate-900 text-white'>
        <button className='name mx-5  text-4xl '>WAKEFUL WORKFORCE</button>
        <button className='flex-grow'></button>
        <Link to="/" className='mx-10 text-1xl  font-bold px-2 py-2 hover:border-b-2 hover:border-cyan-400'>HOME</Link>
        <Link to="/aboutus" className='mx-10 text-1xl  font-bold px-2 py-2 hover:border-b-2 hover:border-cyan-400'>ABOUT US</Link>
        <Link to="/contactus" className='mx-10 text-1xl font-bold px-2 py-2 hover:border-b-2 hover:border-cyan-400'>CONTACT US</Link>
        {isAuthenticated ?
          <Link to="/login" className='mx-4 text-1xl hover:bg-indigo-900 p-1 font-bold border-4 border-cyan-400 rounded-[10px] px-4 py-2 text-2xl ' onClick={async () => { await handleLogout() }}>LOGOUT</Link>
          :
          <Link to="/login" className='mx-4 text-1xl hover:bg-cyan-400 hover:text-slate-900 p-1 font-bold border-4 border-cyan-400 rounded-[26px] px-4 py-2 text-1xl transition ease-out duration-300'>LOGIN</Link>
        }
      </div>
    </nav>

  );
}
