const mongoose = require("mongoose");
const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

const app = express()

// start server
const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Server started on port ${port} and listening`);
});

// DB Connect
mongoose.connect(process.env.Mongo_URI).then(() => console.log("Connected to database")).catch((err) => console.log(err))