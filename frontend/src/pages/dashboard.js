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
        <div className="bg-slate-900 min-h-screen p-6">
            <div className="grid grid-cols-2 gap-6 mt-3">

                <div className="  col-span-2  flex flex-col border-white border-2  p-6 gap-6 group bg-black">
                    <div className="flex items-center  ">
                        <p className=' text-cyan-400 drop-shadow-xl px-6 font-nunito font-bold text-[100px] basis-3/4 '>16</p>
                        <div className=' flex flex-col  my-3'>
                            <p className=' font-oswald font-bold text-3xl text-end my-3  text-white'>TASK FOR TODAY</p>
                            <p className="text-gray-400 text-lg font-nunito font-medium text-end ">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                        </div>
                    </div>
                    <button className=" bg-cyan-400  text-white font-semibold text-xl py-2 px-4 rounded-full self-end  hover:bg-red-500 transition ">Start session</button>
                </div>

                <Link className="flex items-center justify-center my-6 h-auto bg-black  border-white border-2  p-6  gap-3  hover:cursor-pointer " to="/todo">
                    <img src="./to-do-list.png" alt="todo" className="size-24" />
                    <div>
                        <div className="text-white text-2xl font-fedroka font-bold  ">Open To-do List</div>
                        <div className='text-gray-400 text-lg font-fedroka  '> Hello world, this is new</div>
                    </div>
                </Link>

                <div className="flex  items-center justify-center my-6 h-auto gap-6 border-white border-2 p-6 bg-black  hover:cursor-pointer ">
                    <img src="./calenderdashboard.png" alt="calendar" className="size-20 " />
                    <div className='flex flex-col'>
                        <div className="text-white text-2xl font-fedroka font-bold  ">Open Planner</div>
                        <div className='text-gray-400 text-lg font-fedroka  '> Hello world, this is new</div>
                    </div>

                </div>

            </div>
        </div >
    );
};

export default Dashboard;
