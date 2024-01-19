import React, { useRef, useEffect } from 'react';
import axios from 'axios';

const Session = () => {
  const videoRef = useRef();

  useEffect(() => {
    const captureAndSend = async () => {
      const video = videoRef.current;

      if (video) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        // Set canvas dimensions to match video
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Draw video frame on canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Convert canvas content to base64
        const imageBase64 = canvas.toDataURL('image/jpeg');

        // Send image to the Flask server
        try {
          await axios.post('http://127.0.0.1:5000/upload', { image: imageBase64 });
          console.log('Image sent successfully');
        } catch (error) {
          console.error('Failed to send image', error);
        }
      }
    };

    const initWebcam = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };

    initWebcam();

    const intervalId = setInterval(captureAndSend, 1000); // Adjust the interval as needed

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <video ref={videoRef} autoPlay />;
};

export default Session;
