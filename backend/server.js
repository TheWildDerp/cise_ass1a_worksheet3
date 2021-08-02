const express = require("express");

const server = express();

server.get('/', (req,res) => {
    res.send("API is running")
})

server.listen(PORT, console.log("server is working and listening port 5000"));
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT||5000;