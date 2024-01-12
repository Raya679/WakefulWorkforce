import { createContext, useEffect, useState } from "react";
import { checkAuthentication } from "../utils/checkAuthentication";


export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await checkAuthentication();
                setAuthenticated(response.data);
            } catch (error) {
                console.error("Error checking authentication:", error);
            }
        };

        fetchData();
    }, []);

    if (isAuthenticated === null) {
        return <div className="flex  bg-slate-900 justify-center items-center h-screen flex-col gap-2">
            <img src="/load.png" alt="loading" className=" animate-spin w-10" />
            <p className=" font-oswald font-semibold">"LEMME COOK"</p>
        </div>;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }} >
            {children}
        </AuthContext.Provider>
    )
}