import React from 'react';

export default function SecondDisplay() {
  return (
    <div className='flex mt-24'>
      <div className="text ml-10">
        <div className="text-left text-white text-[88px] font-bold font-['Fredoka One']">CREATE SESSIONS</div>
        <div className="w-[572px] h-[216px] text-right text-cyan-400 text-[39px] font-normal font-['Fredoka One'] ml-44">FOCUS ON YOURSELF<br/>NO DISTRACTIONS<br/>JUST YOU AND YOUR WORK</div>
      </div>
      <img className="w-[512px] h-[512px] ml-96 mt-[-50px]" src={process.env.PUBLIC_URL + '/image_2.png'} alt="My Image" />
      
    </div>
  );
}
