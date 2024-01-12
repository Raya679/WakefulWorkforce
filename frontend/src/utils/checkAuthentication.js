import axios from "axios"

export const checkAuthentication = async () => {
    try {
        return await axios.get("/api/isAuth")
    } catch (err) {
        console.log(err)
        return false
    }
}