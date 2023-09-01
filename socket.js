import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

let conversationMap = {};

const updateConversationMap = (userOrigin, data) => {
  if (conversationMap[userOrigin]) {
    return conversationMap[userOrigin].push(data);
  }
  conversationMap[userOrigin] = [];
  return conversationMap[userOrigin].push(data);
};

const io = new Server(server, {
  cors: {
    origin: "http://localhost:4000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("clientMessage", (data) => {
    const userOrigin = socket.handshake.headers.origin;
    updateConversationMap(userOrigin, data);
    console.log("conversationMap", JSON.stringify(conversationMap));

    io.emit("serverMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
