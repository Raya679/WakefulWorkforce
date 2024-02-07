import React from 'react';
import useAuthContext from '../hooks/useAuthContext';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const { isAuthenticated } = useAuthContext()

    if (!isAuthenticated) {
        return <Navigate to='/login' />
    }

    return (
        <div className="bg-slate-900 min-h-screen p-6 font-['Fredoka One']">
            <div className="grid grid-cols-2 gap-6 mt-3">

                <div className="  col-span-2 h-full  flex flex-col border-4 border-cyan-400 rounded-2xl p-6 gap-6 group bg-slate-900">
                    <div className="flex items-center  ">
                        {/* <p className=' text-cyan-400 drop-shadow-xl px-6 font-bold text-[100px] basis-3/4 '>16</p> */}
                        <div className=' flex flex-col  my-3'>
                            <p className=" font-['Fredoka One'] font-bold text-5xl text-end my-3  text-white">TASK FOR TODAY</p>
                            <p className="text-cyan-400 text-lg text-end font-['Fredoka One']">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                        </div>
                    </div>
                   
                    <Link to="http://127.0.0.1:5000/" className=" bg-cyan-400 text-slate-900 font-extrabold font-['Fredoka One'] text-xl py-2 px-4 rounded-full self-end  hover:bg-slate-900 hover:border-4 hover:text-cyan-400 hover:border-cyan-400 transition ">START SESSION </Link>
                   
                   
                </div>

                <Link className="flex items-center justify-center my-6 h-full bg-slate-900  border-cyan-400 rounded-2xl border-4  p-6  gap-3  hover:cursor-pointer  " to="/todo">
                    <img src="./to-do-list.png" alt="todo" className="size-24" />
                    <div>
                        <div className="text-slate-900 text-2xl font-['Fredoka One'] font-bold bg-cyan-400 rounded-xl my-3 px-3 py-2 hover:text-cyan-400 hover:bg-slate-900 hover:border-4 hover:border-cyan-400 transition">OPEN TO-DO LIST</div>
                        <div className="text-cyan-400 text-lg font-['Fredoka One'] ml-3"> Hello world, this is new</div>
                    </div>
                </Link>

                <div className="flex  items-center justify-center my-6 h-full gap-6 border-cyan-400 rounded-2xl border-4 p-6 bg-slate-900  hover:cursor-pointer ">
                    <img src="./calenderdashboard.png" alt="calendar" className="size-20 " />
                    <div className='flex flex-col '>
                        <div className="text-white text-2xl font-['Fredoka One'] font-bold my-3">OPEN PLANNER</div>
                        <div className="text-cyan-400 text-lg font-['Fredoka One']"> Hello world, this is new</div>
                    </div>

                </div>

            </div>
        </div >
    );
};

export default Dashboard;
