import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));

import session from "express-session";
import "dotenv/config";
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

import path from "path";
app.use(express.static(path.resolve("../client/public")));

import http from "http";
const server = http.createServer(app);

import router from "./routers/userregistration.js";
app.use(router);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", ({ data }) => {

  io.emit("changeColor", { data });
  
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log("Server is running on port", PORT));
