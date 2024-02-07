import React from 'react';
import useAuthContext from '../hooks/useAuthContext';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to='/login' />;
    }

    const today = new Date().getDate(); // Get today's date

    return (
        <div className="bg-slate-900 min-h-screen p-6 ">
            <div className="grid grid-cols-2 gap-6 mt-3">
                <div className="my-14 ml-32 col-span-2 flex flex-col border-cyan-400 border-2 p-6 gap-6 group bg-black rounded-3xl w-5/6 shadow-2xl shadow-cyan-600">
                    <div className="flex items-center ">
                        <p className='text-cyan-400 mt-16 px-6 font-nunito font-bold basis-3/4 ml-12 text-9xl'>{today}</p> {/* Display today's date */}
                        <div className='flex flex-col my-3'>
                            <p className='font-oswald font-bold text-3xl text-end my-3 mr-7 text-white'>TASK FOR TODAY</p>
                            <p className="text-gray-400 text-lg font-nunito font-medium text-end mr-7">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </p>
                        </div>
                    </div>
                    <button className="bg-sky-950 text-2xl font-bold hover:bg-cyan-500 py-2 px-4 rounded-[30px] border-4 border-cyan-400 ml-auto mb-4 -mt-3 mr-7 transition ease-out duration-300 ">Start session</button>
                </div>
                <Link to="/todo">
                    <div className="flex items-center justify-center my-8 h-40 bg-black border-cyan-400 border-2 p-6 gap-3 hover:cursor-pointer rounded-3xl w-3/4 ml-44">
                        <img src="./to-do-list.png" alt="todo" className="size-24" />
                        <div>
                            <div className="text-white text-2xl font-fedroka font-bold  ">Open To-do List</div>
                            <div className='text-gray-400 text-lg font-fedroka  '> Hello world, this is new</div>
                        </div>
                    </div>
                </Link>
                <Link to="/Calendar">
                    <div className="flex  items-center justify-center my-8 h-40 gap-6 border-cyan-400 border-2 p-6 bg-black  hover:cursor-pointer rounded-3xl w-3/4">
                        <img src="./calenderdashboard.png" alt="calendar" className="size-20 " />
                        <div className='flex flex-col'>
                            <div className="text-white text-2xl font-fedroka font-bold  ">Open Planner</div>
                            <div className='text-gray-400 text-lg font-fedroka  '> Hello world, this is new</div>
                        </div>

                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
