const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config()

const authRoutes = require("./Routes/AuthRoutes")

const app = express()

// app.use(cors())
app.use(express.json())
app.use(cookieParser())


const dbURI = process.env.MONGO_URL;
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(5000, () => {
            console.log("connected")
        })
    })
    .catch((err) => console.log(err));

app.use(authRoutes)