import React from 'react';

export default function Navbar() {
  return (
    <nav className='sticky top-0'>
      <div className='flex items-center px-2 py-3 font-bold bg-slate-900 text-white'>
        <button className='name mx-5  text-4xl '>WAKEFUL WORKFORCE</button>
        <button className='flex-grow'></button>
        <button type="button" className='mx-4 text-1xl hover:bg-indigo-900 rounded-md px-4 py-2 underline underline-offset-8 decoration-cyan-400'>HOME</button>
        <button type="button" className='mx-4 text-1xl hover:bg-indigo-900 rounded-md px-4 py-2'>ABOUT US</button>
        <button type="button" className='mx-4 text-1xl hover:bg-indigo-900 rounded-md px-4 py-2'>CONTACT US</button>
        <button type="button" className='mx-4 text-1xl hover:bg-indigo-900 p-1 font-extrabold border-4 border-cyan-400 rounded-[10px] px-4 py-2 '>LOGIN</button>
      </div>
      {/* Additional content here */}
    </nav>
  );
}
