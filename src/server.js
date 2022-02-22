
const express = require('express');
const app = express();
const cors= require('cors');

const connect = require("./config/db");
const {signup,signin} = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");

app.use(cors());
app.use(express.json());

app.post("/signup", signup);
app.post("/signin", signin);

app.use("/users", userController);

const start = async ()=>{
    await connect();

    app.listen(5000,()=>{
        console.log("Listen on port 5000");
    })
}

module.exports = start;