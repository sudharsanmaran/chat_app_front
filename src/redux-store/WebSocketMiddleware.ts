// redux-store/socketMiddleware.ts
import { Middleware } from "@reduxjs/toolkit";
import { event_handlers } from "./event_handlers";

const createSocketMiddleware: Middleware = (storeAPI) => {
  const YOUR_AUTH_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxMTQwMTYxLCJpYXQiOjE2OTA1MzUzNjEsImp0aSI6IjBiNWI0NWJlMmIxODRkYzFiMmI1NmJlNTczODFiMWY4IiwidXNlcl9pZCI6Ijc1YThjNjg2LTYxODUtNDEyNS05NDIzLTFmZDJmODM0YmVmMSJ9.bbx5-N-hlX_M2D5R5ZpddVnm7jOW7bJoQ0vqUJCeGbM";
  const socket = new WebSocket(
    `ws://0.0.0.0:8002/ws/chat/?token=${YOUR_AUTH_TOKEN}`
  );

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("Received message:", data);
    const event_handler = event_handlers.get(data.type) || null;
    if (event_handler) {
      storeAPI.dispatch(event_handler(data["message"]));
    }
  };

  return (next) => (action) => {
    if (action.type === "SEND_WEBSOCKET_MESSAGE") {
      const jsonPayload = JSON.stringify(action.payload);
      socket.send(jsonPayload);
      return;
    }

    return next(action);
  };
};

export default createSocketMiddleware;
