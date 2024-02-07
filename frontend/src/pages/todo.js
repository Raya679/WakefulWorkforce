import React, { useEffect, useState } from 'react'
import axios from "axios"
import { DatePicker } from 'antd';
import dayjs from "dayjs"
import useDateContext from "../hooks/useDateContext"

// can implement the entire thing using dayjs only

function Todo() {

    const { date, setDate } = useDateContext();

    const [list, setlist] = useState([]);

    const [val, setVal] = useState("");
    const [err, seterr] = useState("")

    function handleDataEntry() {
        if (val.trim() !== "") {
            setlist((prevlist) => [...prevlist, val]);
            setVal("");
            return val
        }
    }

    async function handleSubmit() {
        let temp = list;
        let item = handleDataEntry()
        if (item) { temp = list.concat(item); seterr("") }
        else { seterr("Please enter a task") }
        if (list.length) {
            try {
                await axios.post("/api/todo", { list: temp, day: date.day, month: date.month, year: date.year })
            } catch (err) {
                console.log(err)
            }
        }
    }


    async function handleDelete(idx) {
        const temp = list.filter((_element, index) => { return index !== idx && list[index] })
        setlist(temp)
        try {
            await axios.post("/api/todo", { list: temp, day: date.day, month: date.month, year: date.year })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        async function handleGetAll() {
            try {
                const url = process.env.REACT_APP_EXPRESS_URL + `/api/todoALL?day=${date.day}&month=${date.month}&year=${date.year}`
                const response = await axios.get(url, {withCredentials:true})
                if (response.status === 200) {
                    if (response.data.todo) {
                        setlist(response.data.todo.list)
                    } else {
                        setlist([])
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }
        handleGetAll()
    }, [date.day, date.month, date.year])


    return (
        <div className=' min-h-screen ' >
            < div className=' flex flex-col jn={(e) => { console.log(e.key) }}ustify-center w-2/3 bg-white rounded-xl mx-auto my-4 p-5' >
                <DatePicker value={dayjs().date(date.day).month(date.month).year(date.year)} onChange={({ $D, $M, $y }) => { setDate({ day: $D, month: $M, year: $y }) }} />
                <input placeholder='Enter your tasks here ' value={val} type="text" onChange={(e) => { setVal(e.target.value) }} className=' w-1/2 text-black m-4 self-center font-semibold font-fedroka p-2 border-black focus:ring-1 active:border-cyan-400  ' onKeyDown={(e) => { e.key === "Enter" && handleSubmit() }} />
                <div onClick={handleSubmit} className='  self-center w-1/6  p-2  bg-indigo-500 text-white font-nunito font-bold text-center cursor-pointer'>Submit</div>
                <p className='text-red-500'>{err}</p>
            </div >
            <div>
                <div className=' font-oswald font-bold text-[40px]  m-3 border-b-2 py-3 border-cyan-400  '>Tasks to be done </div>
                <div className=' grid grid-cols-2  mx-3 place-items-center grid-col  '>

                    {list.length ?
                        list.map((element, idx) => {
                            return (
                                <div className=' flex m-4 justify-between  text-lg bg-white rounded-lg w-2/3  text-black p-4 font-nunito font-bold ' key={idx}>
                                    <div  >{element}</div>
                                    <img src="./remove.png" alt="deleteicon" className=' cursor-pointer size-6 ' onClick={() => handleDelete(idx)} />
                                </div>
                            )
                        })
                        :
                        <div>You schedule seems empty... Try adding some actions!!</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo
