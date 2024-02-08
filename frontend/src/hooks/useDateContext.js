import { DateContext } from "../Context/DateContext";
import { useContext } from "react";

export default function useDateContext() {
    const context = useContext(DateContext)
    if (!context) {
        throw new Error("DateContext not found")
    }

    return context;
}