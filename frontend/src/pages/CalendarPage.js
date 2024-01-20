import React, { useState } from 'react'
import axios from 'axios';
import { Calendar, theme } from "antd";

function CalendarPage() {

    const [list, setList] = useState([]);

    const handleSelect = async (e) => {
        try {
            const url = `/api/todoALL?day=${e.getDate()}&month=${e.getMonth()}&year=${e.getFullYear()}`
            const response = await axios.get(url)
            if (response.status === 201) {
                setList(response.data.todo.list)
            }
        } catch (err) {
            console.log(err);
        }
    }

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    const { token } = theme.useToken();
    const wrapperStyle = {
        width: 400,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    return (
        <div className=' flex flex-col p-5 gap-5'>
            <div style={wrapperStyle} className=' self-center ' >
                <Calendar fullscreen={false} onPanelChange={onPanelChange} onChange={handleSelect} />
            </div>
            <div>{list}</div>
        </div>
    )
}

export default CalendarPage
