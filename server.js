import http from "http";
import { WebSocketServer } from "ws";

const port = process.env.PORT || 3000;

// HTTP server minimal untuk Railway
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("WebSocket server is running.");
});

// Buat WebSocket server di atas HTTP server
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log("Received:", message.toString());
    ws.send("Server echo: " + message.toString());
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// Jalankan HTTP + WS server
server.listen(port, () => {
  console.log("Server running on port " + port);
});
