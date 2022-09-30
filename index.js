/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2022-09-30 13:26:35
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2022-09-30 13:30:23
 * @FilePath: \voice-demo\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.broadcast.emit("start");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("signal", (data) => {
    socket.broadcast.emit("signal", data);
  });

  socket.on("close", () => {
    console.log("close");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
