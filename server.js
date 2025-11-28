const WebSocket = require('ws');
const port = process.env.PORT || 8080;

const wss = new WebSocket.Server({ port: port });

wss.on('connection', function connection(ws) {
  console.log("Client connected");

  ws.on('message', function incoming(message) {
    console.log("Received:", message);
  });

  ws.send("Connected to WebSocket Server");
});

console.log("WebSocket server running on port", port);
