from flask import Flask, request, Response
import cv2
from keras.models import load_model
import numpy as np
from pygame import mixer
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)


# MODEL IS ABLE TO RUN ON FLASK ALONE
@app.route('/', methods=['GET'])
def upload_image():
    try:
        camera = cv2.VideoCapture(0, cv2.CAP_DSHOW)

        def generate_frames():
            mixer.init()
            sound = mixer.Sound(r'frontend/mlmodel/alarm.wav')

            face = cv2.CascadeClassifier(
                r'frontend/mlmodel/Resources/haarcascade_frontalface_alt.xml')
            leye = cv2.CascadeClassifier(
                r'frontend/mlmodel/Resources/haarcascade_lefteye_2splits.xml')
            reye = cv2.CascadeClassifier(
                r'frontend/mlmodel/Resources/haarcascade_righteye_2splits.xml')

            lbl = ['Close', 'Open']

            model = load_model(
                r'frontend/mlmodel/models/DrowsinessDetection.h5')
            font = cv2.FONT_HERSHEY_COMPLEX_SMALL
            count = 0
            score = 0

            rpred = [99]
            lpred = [99]

            while True:
                success, frame = camera.read()  # read the camera frame
                if not success:
                    break

                height, width = frame.shape[:2]

                gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

                faces = face.detectMultiScale(
                    gray, minNeighbors=5, scaleFactor=1.1, minSize=(25, 25))
                left_eye = leye.detectMultiScale(gray)
                right_eye = reye.detectMultiScale(gray)

                cv2.rectangle(frame, (0, height-50), (200, height),
                              (0, 0, 0), thickness=cv2.FILLED)

                for (x, y, w, h) in faces:
                    cv2.rectangle(frame, (x, y), (x+w, y+h),
                                  (100, 100, 100), 1)

                for (x, y, w, h) in right_eye:
                    r_eye = frame[y:y+h, x:x+w]
                    count = count+1
                    r_eye = cv2.cvtColor(r_eye, cv2.COLOR_BGR2GRAY)
                    r_eye = cv2.resize(r_eye, (24, 24))
                    r_eye = r_eye/255
                    r_eye = r_eye.reshape(24, 24, -1)
                    r_eye = np.expand_dims(r_eye, axis=0)
                    rpred = np.argmax(model.predict(r_eye), axis=-1)
                    if (rpred[0] == 1):
                        lbl = 'Open'
                    if (rpred[0] == 0):
                        lbl = 'Closed'
                    break

                for (x, y, w, h) in left_eye:
                    l_eye = frame[y:y+h, x:x+w]
                    count = count+1
                    l_eye = cv2.cvtColor(l_eye, cv2.COLOR_BGR2GRAY)
                    l_eye = cv2.resize(l_eye, (24, 24))
                    l_eye = l_eye/255
                    l_eye = l_eye.reshape(24, 24, -1)
                    l_eye = np.expand_dims(l_eye, axis=0)
                    lpred = np.argmax(model.predict(l_eye), axis=-1)
                    if (lpred[0] == 1):
                        lbl = 'Open'
                    if (lpred[0] == 0):
                        lbl = 'Closed'
                    break

                if (rpred[0] == 0 and lpred[0] == 0):
                    score = score+1
                    cv2.putText(frame, "Closed", (10, height-20),
                                font, 1, (0, 0, 255), 1, cv2.LINE_AA)
                else:
                    score = score-1
                    cv2.putText(frame, "Open", (10, height-20),
                                font, 1, (0, 255, 0), 1, cv2.LINE_AA)

                if (score < 0):
                    score = 0

                cv2.putText(frame, 'Score:'+str(score), (100, height-20),
                            font, 1, (255, 255, 255), 1, cv2.LINE_AA)
                faces = face.detectMultiScale(
                    gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

                if (score > 15 or len(faces) <= 0):
                    sound.play()
                    cv2.rectangle(frame, (0, 0), (width, height), (0, 0, 255))

                ret, buffer = cv2.imencode('.jpg', frame)
                frame = buffer.tobytes()
                yield (b'--frame\r\n'
                       b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

        return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

    except Exception as e:
        return {'error': str(e)}, 500


if __name__ == '__main__':
    app.run(debug=True)
