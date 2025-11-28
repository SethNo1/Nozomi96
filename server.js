import { WebSocketServer } from "ws";

const port = process.env.PORT || 3000;

const wss = new WebSocketServer({ port });

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

console.log("WebSocket server running on port " + port);
