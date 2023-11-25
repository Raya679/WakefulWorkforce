import React from 'react';
import Footer from './Footer';

export default function Homepage() {
    return (
        <>
            <div className="flex">
                <div className="mt-[-50px]">
                    <img className="w-[1200px] h-[1100px]" src='./time.png' alt="My" />
                </div>
                <div className="right-text mr-20 mt-16">
                    <div className="text-right text-cyan-400 text-[60px] font-bold font-['Fredoka One'] p-6">FOCUS<br />ACHIEVE<br />SUCCEED</div>
                    <div className="w-[850px] h-[370px] text-right text-white text-8xl font-semibold font-['Fredoka One'] p-6 py-6" style={{ lineHeight: '1.5' }}>
                        <b>WAKEFUL <br />WORKFORCE</b>
                    </div>
                    <button type="button" className="w-[449px] h-[79px] bg-cyan-400 rounded-[50px] py-6 text-slate-950 text-[40px] font-bold font-['Fredoka One'] font-extrabold  flex items-center justify-center hover:text-white ml-96  hover:bg-cyan-700">
                        START A SESSION
                    </button>

                </div>
            </div>
            <div className='flex mt-24'>
                <div className="text ml-10">
                    <div className="text-left text-white text-[88px] font-bold font-['Fredoka One']">CREATE SESSIONS</div>
                    <div className="w-[572px] h-[216px] text-right text-cyan-400 text-[39px] font-normal font-['Fredoka One'] ml-44">FOCUS ON YOURSELF<br />NO DISTRACTIONS<br />JUST YOU AND YOUR WORK</div>
                </div>
                <img className="w-[512px] h-[512px] ml-96 mt-[-50px]" src="./image_2.png" alt="My" />

            </div>
            <div className='flex mt-52'>
                <img className="w-[512px] h-[512px] ml-40 mt-10" src='./image_3.png' alt="My" />
                <div className="text ml-auto mr-44 mt-36">
                    <div className="text-center text-white text-[88px] font-bold font-['Fredoka One']">SCHEDULE</div>
                    <div className="w-[464px] h-[216px] text-cyan-400 text-[39px] font-normal font-['Fredoka One']">PLAN AHEAD<br />SET PRIORITIES<br />GET THE JOB DONE</div>
                </div>
            </div>
            <div className='flex mt-52 mb-32'>
                <div className="text ml-44 mt-16">
                    <div className="text-white text-[88px] font-bold w-[554px] h-[216px] text-right font-['Fredoka One']">ANALYSE YOURSELF</div>
                    <div> <br /> </div>
                    <div> <br /> </div>
                    <div className="w-[554px] h-[216px] text-right text-cyan-400 text-[35px] font-normal font-['Fredoka One']">IN-DEPTH ANALYTICS<br />UNDERSTAND YOUR WEAKNESSES AND STRENGTHS<br /></div>
                </div>
                <img className="w-[512px] h-[512px] ml-auto mr-36 mt-[-50px]" src='./image_4.png' alt="My " />

            </div>
            <Footer />
        </>
    );
}
