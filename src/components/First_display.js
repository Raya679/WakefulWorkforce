import React from 'react';

export default function FirstDisplay() {
    return (
        <>
            <div className="flex">
                <div className="mt-[-50px]">
                    <img className="w-[1200px] h-[1100px]" src={process.env.PUBLIC_URL + '/time.png'} alt="My Image" />
                </div>
                <div className="right-text mr-20 mt-16"> {/* Adjusted margin-left value */}
                    <div className="text-right text-cyan-400 text-[60px] font-bold font-['Fredoka One'] p-6">FOCUS<br />ACHIEVE<br />SUCCEED</div>
                    <div className="w-[850px] h-[370px] text-right text-white text-8xl font-semibold font-['Fredoka One'] p-6 py-6" style={{ lineHeight: '1.5' }}>
                        <b>WAKEFUL <br />WORKFORCE</b>
                    </div>
                    <button type="button" className="w-[449px] h-[79px] bg-cyan-400 rounded-[50px] py-6 text-slate-950 text-[40px] font-bold font-['Fredoka One'] font-extrabold  flex items-center justify-center hover:text-white ml-96  hover:bg-cyan-700">
                        START A SESSION
                    </button>
                    <div> <br /> <br /> <br /> <br /> <br /> <br />  <br /> <br /> <br /></div>
                </div>
            </div>
        </>
    );
}
