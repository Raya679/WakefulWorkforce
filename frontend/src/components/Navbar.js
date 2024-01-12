import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom"
import useAuthContext from '../hooks/useAuthContext';


export default function Navbar() {

  const { isAuthenticated, setAuthenticated } = useAuthContext()

  async function handleLogout() {
    try {
      const response = await axios.get("/api/logout")
      setAuthenticated(response.data)
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <nav className='sticky top-0'>
      <div className='flex items-center px-2 py-2 font-bold bg-slate-900 text-white'>
        <button className='name mx-5  text-4xl '>WAKEFUL WORKFORCE</button>
        <button className='flex-grow'></button>
        <Link to="/" className='mx-8 text-2xl hover:text-cyan-400 hover:text-3xl'>HOME</Link>
        <Link to="/aboutus" className='mx-8 text-2xl hover:text-cyan-400 hover:text-3xl '>ABOUT US</Link>
        <button type="button" className='mx-8 text-2xl hover:text-cyan-400 hover:text-3xl' onClick={() => { console.log(isAuthenticated) }}>CONTACT US</button>
        {isAuthenticated ?
          <Link to="/login" className='mx-4 text-1xl hover:bg-indigo-900 p-1 font-extrabold border-4 border-cyan-400 rounded-[10px] px-4 py-2 text-2xl ' onClick={async () => { await handleLogout() }}>LOGOUT</Link>
          :
          <Link to="/login" className='mx-4 text-1xl hover:bg-indigo-900 p-1 font-extrabold border-4 border-cyan-400 rounded-[10px] px-4 py-2 text-2xl '>LOGIN</Link>
        }
      </div>
    </nav>
  );
}
