import { useEffect } from 'react'
import axios from 'axios';
const Session = () => {
    const getVideo = async () => {
        try {
            const response = await axios.get('http://localhost:5000/video_feed');
            console.log(response.headers);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getVideo();
    }, [])
    return (
        <>
        </>

    );
}

export default Session;