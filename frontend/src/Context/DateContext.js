import { createContext, useState } from "react";



export const DateContext = createContext();

export default function DateContextProvider({ children }) {

    const [date, setDate] = useState({
        day: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    })

    return (
        <DateContext.Provider value={{ date, setDate }}>
            {children}
        </DateContext.Provider>
    )
}