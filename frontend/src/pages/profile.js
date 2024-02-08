import React, { useEffect, useState } from 'react';
import axios from "axios";

function Profile() {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        handleGetAll();
    }, []);

    async function handleGetAll() {
        try {
            const response = await axios.post('/api/infoget', null, { withCredentials: true });
            if (response.status === 200) {
                setInfo(response.data.info);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            {info ? (
                <>
                    <div className=' text-6xl font-extrabold text-white text-center'>
                        <h2>User Information</h2>
                    </div>
                    <div className=' flex'>
                        <div className='info mt-40 ml-40 mb-28  py-10 px-9 border-cyan-400 border-4 rounded-[40px] h-min'>
                            <div className=' text-4xl border-cyan-400 border-4 rounded-[40px] px-12 py-3 text-center my-16 mx-11 bg-sky-950'>
                                Job : {info.job}
                            </div>
                            <div className=' text-4xl border-cyan-400 border-4 rounded-[40px] px-12 py-3 text-center my-16 mx-11 bg-sky-950'>
                                Goal : {info.goal}
                            </div>
                            <div className=' text-4xl border-cyan-400 border-4 rounded-[40px] px-12 py-3 text-center my-16 mx-11 bg-sky-950'>
                                Sleeping Duration : {info.sleep} hrs
                            </div>
                            <div className=' text-4xl border-cyan-400 border-4 rounded-[40px] px-12 py-3 text-center my-16 mx-11 bg-sky-950'>
                                Concentration span : {info.sittingHour} hrs
                            </div>
                        </div>
                        <div className=' w-2/6 ml-auto mr-24 mt-28'>
                            <img src="/person.png" alt="my" />
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Profile;
