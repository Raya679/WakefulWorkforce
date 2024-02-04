import axios from "axios"

export const checkAuthentication = async () => {
    try {
        return await axios.get(`${process.env.REACT_APP_EXPRESS_URL}/api/isAuth`, { withCredentials: true })
    } catch (err) {
        console.log(err)
        return false
    }
}