
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import { ApolloServer } from '@apollo/server';
import express = require("express");
import morgan = require("morgan");
// import PersonRouter from "./routes/PersonRoute";
import * as dotenv from "dotenv"

const app = express();
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
    console.log("Development mode...");
}

app.use(express.json());


// app.use("/api/v1/person", PersonRouter);

export default app;