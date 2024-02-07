import axios from 'axios';
import React from 'react';
import { Link , useNavigate } from "react-router-dom"
import useAuthContext from '../hooks/useAuthContext';
import picture1 from "./others.png";

export default function Navbar() {

  const { isAuthenticated, setAuthenticated } = useAuthContext()
  const navigate = useNavigate();
  async function handleLogout() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_EXPRESS_URL}/api/logout`, { withCredentials: true })
      setAuthenticated(response.data)
      navigate('/login');
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <nav className='sticky z-10 w-full top-0'>
    <div className='flex items-center px-2 py-2 font-bold bg-slate-900 text-white'>
      <button className='name mx-5 text-4xl'>WAKEFUL WORKFORCE</button>
      <button className='flex-grow'></button>
      <Link to="/" className='mx-10 text-1xl font-bold hover:text-cyan-400 transition ease-out duration-500'>HOME</Link>
      <Link to="/aboutus" className='mx-10 text-1xl font-bold hover:text-cyan-400 transition ease-out duration-500'>ABOUT US</Link>
      <Link to="/contactus" className='mx-10 text-1xl font-bold hover:text-cyan-400 transition ease-out duration-500'>CONTACT US</Link>
      {isAuthenticated ? (
        <>
          <button
            onClick={handleLogout}
            className="mx-4 text-1xl hover:bg-cyan-400 hover:text-slate-900 p-1 font-bold border-4 border-cyan-400 rounded-[26px] px-4 py-2 text-1xl transition ease-out duration-300"
          >
            LOGOUT
          </button>
          <Link
            to="/profile"
            className=" h-10 w-auto mr-6 overflow-hidden"
          >
            <img
              src={picture1}
              alt="Profile"
              className="rounded-full w-10 mx-2"
            />
          </Link>
        </>
      ) : (
        <Link
          to="/login"
          className="mx-4 text-1xl hover:bg-cyan-400 hover:text-slate-900 p-1 font-bold border-4 border-cyan-400 rounded-[26px] px-4 py-2 text-1xl transition ease-out duration-300"
        >
          LOGIN
        </Link>
      )}
    </div>
  </nav>
  );
}