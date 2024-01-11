import { createContext, useState } from "react";


export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }} >
            {children}
        </AuthContext.Provider>
    )
}