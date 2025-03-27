import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log(`Received message => ${message}`);
    socket.send(`You sent => ${message}`);
  });
});