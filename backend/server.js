
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config()

const authRoutes = require("./Routes/AuthRoutes")
const todoRoutes = require("./Routes/TodoRoutes")
const questionnaireRoutes = require("./Routes/QuestionnaireRoutes");

const app = express()

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
    
}
app.use(cors(corsOptions));
app.use(express.json())
app.use(cookieParser())


const dbURI = process.env.MONGO_URL;
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(4000, () => {
            console.log("connected")
        })
    })
    .catch((err) => console.log(err));

app.use(authRoutes);
app.use(todoRoutes);
app.use("/", questionnaireRoutes);