const http = require("http");
const WebSocket = require("ws");

const port = process.env.PORT || 3000;

// HTTP server supaya Railway tidak crash
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("WebSocket server is running.");
});

// Buat WebSocket di atas HTTP server
const wss = new WebSocket.Server({ server });

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

// Mulai server
server.listen(port, () => {
  console.log("Server running on port " + port);
});
