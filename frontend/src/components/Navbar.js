import React from 'react';
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className='sticky top-0'>
      <div className='flex items-center px-2 py-2 font-bold bg-slate-900 text-white'>
        <button className='name mx-5  text-4xl '>WAKEFUL WORKFORCE</button>
        <button className='flex-grow'></button>
        <Link to="/" className='mx-8 text-2xl hover:text-cyan-400 hover:text-3xl'>HOME</Link>
        <Link to="/aboutus" className='mx-8 text-2xl hover:text-cyan-400 hover:text-3xl '>ABOUT US</Link>
        <button type="button" className='mx-8 text-2xl hover:text-cyan-400 hover:text-3xl'>CONTACT US</button>
        {localStorage.getItem("jwt") ?
          <Link to="/form" className='mx-4 text-1xl hover:bg-indigo-900 p-1 font-extrabold border-4 border-cyan-400 rounded-[10px] px-4 py-2 text-2xl '>LOGOUT</Link>
          :
          <Link to="/form" className='mx-4 text-1xl hover:bg-cyan-400 hover:text-slate-900 p-1 font-extrabold border-2 border-cyan-400 rounded-[10px] px-3 py-2 text-2xl '>LOGIN</Link>
        }
      </div>
    </nav>
  );
}
