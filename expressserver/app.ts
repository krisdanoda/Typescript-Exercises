import express = require("express");
import {json} from "express";

const app = express();

app.get("/", (req, res) => {

    res.status(200)
        .json({
            status: "success",
            message: "Hello World"
        })


})
app.listen(3001, () => {

    console.log("server is listening to http//localhost:3001")
})