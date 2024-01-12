import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


export default function useAuthContext() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("AuthContext not found")
    }

    return context;
}