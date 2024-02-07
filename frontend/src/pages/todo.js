import React, { useEffect, useState } from 'react';
import axios from "axios";
import { DatePicker } from 'antd';
import dayjs from "dayjs";
import useDateContext from "../hooks/useDateContext";

function Todo() {
    const { date, setDate } = useDateContext();
    const [list, setlist] = useState([]);
    const [val, setVal] = useState("");
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleGetAll() {
        try {
            setLoading(true);
            const url = process.env.REACT_APP_EXPRESS_URL + `/api/todoALL?day=${date.day}&month=${date.month}&year=${date.year}`;
            const response = await axios.get(url, { withCredentials: true });
            setLoading(false);
            if (response.status === 200) {
                if (response.data.todo) {
                    setlist(response.data.todo.list);
                } else {
                    setlist([]);
                }
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        handleGetAll();
    }, [date.day, date.month, date.year]);

    function handleDataEntry() {
        if (val.trim() !== "") {
            return val;
        }
        return null;
    }

    async function handleSubmit() {
        let item = handleDataEntry();
        if (item) {
            const temp = [...list, item];
            setlist(temp); 
            setVal("");
            setErr(""); 
            try {
                await axios.post("/api/todo", { list: temp, day: date.day, month: date.month, year: date.year });
            } catch (err) {
                console.log(err);
            }
        } else {
            setErr("Please enter a task");
        }
    }
    

    async function handleDelete(idx) {
        const temp = list.filter((_element, index) => index !== idx && list[index]);
        setlist(temp);
        try {
            await axios.post("/api/todo", { list: temp, day: date.day, month: date.month, year: date.year });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="w-2/3 bg-slate-900 rounded-[26px] mx-auto p-5 mt-24 border-cyan-400 border-4 text-center mb-28">
            <div className="flex items-center justify-center flex-wrap">
                <div>
                    <DatePicker
                        value={dayjs().date(date.day).month(date.month).year(date.year)}
                        onChange={({ $D, $M, $y }) => {
                            setDate({ day: $D, month: $M, year: $y });
                        }}
                        className="text-black m-4 font-semibold font-fedroka p-2 border-black focus:ring-1 active:border-cyan-400 w-44"
                        style={{
                            height: '2.7rem',
                        }}
                    />
                </div>
                <input
                    placeholder="Enter your tasks here"
                    value={val}
                    type="text"
                    onChange={(e) => {
                        setVal(e.target.value);
                    }}
                    className="w-1/2 rounded-[10px] text-black m-4 font-semibold font-fedroka p-2 border-black focus:ring-1 active:border-cyan-400"
                    onKeyDown={(e) => {
                        e.key === 'Enter' && handleSubmit();
                    }}
                />
                <div
                    onClick={handleSubmit}
                    className="bg-sky-950 text-1xl font-bold hover:bg-cyan-500 py-2 px-4 rounded-[10px] border-4 border-cyan-400"
                >
                    Add task
                </div>
            </div>
            <p className="text-red-500">{err}</p>

            <div>
                <div className="font-oswald font-bold text-[40px] m-3 border-b-2 py-3 border-cyan-400">Tasks to be done</div>

                {loading ? (
                    <div>Loading your tasks...</div>
                ) : list.length ? (
                    <div className="grid grid-cols-2 mx-3 place-items-center grid-col">
                        {list.map((element, idx) => (
                            <div
                                className="flex m-4 justify-between bg-sky-950 rounded-[10px] w-2/3 text-white border-4 border-cyan-400  p-4 font-nunito font-bold text-2xl"
                                key={idx}
                            >
                                <div>{element}</div>
                                <img
                                    src="./remove.png"
                                    alt="deleteicon"
                                    className="cursor-pointer size-6"
                                    onClick={() => handleDelete(idx)}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center mx-auto">
                        <div className="w-1/2 h-auto -mt-14 mb-11">
                            <img src="/free.png" alt="my" />
                        </div>
                        <div className="text-[23px]">Your schedule seems empty... Try adding some tasks!!</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Todo;
