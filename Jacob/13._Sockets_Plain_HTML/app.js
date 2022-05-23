import express from "express";
const app = express();

app.use(express.static("public"));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("a client changed the color", ({ data }) => {

        // emits to all clients except the one that sent the message
    // socket.broadcast.emit("change the color", { data });

        // emits to all clients including the one that sent the message
    io.emit("change the color", { data });


        // emits to the client that sent the message
    // socket.emit("change the color", {data});
  });
});

import path from "path";

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./public/colors.html"));
});

server.listen(3000);
