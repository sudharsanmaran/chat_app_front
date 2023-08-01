// redux-store/socketMiddleware.ts
import { Middleware } from "@reduxjs/toolkit";
import { event_handlers } from "./event_handlers";

const createSocketMiddleware: Middleware = (storeAPI) => {
  const YOUR_AUTH_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxNDg1MDgzLCJpYXQiOjE2OTA4ODAyODMsImp0aSI6Ijk4YmRhOGM0MDU0ZDQ3MTRiYzA1OThiNTJjZDljZWQyIiwidXNlcl9pZCI6ImM5OGQ1M2YxLTQ5MmQtNDdmNy05MjM1LTM4MmFhNzU2ZmZmZiJ9.ySXVIQoE9-irCLcBh0i1Cz0S6Jp-Cnp3sTpRFbLm6vI";
  const socket = new WebSocket(
    `ws://0.0.0.0:8002/ws/chat/?token=${YOUR_AUTH_TOKEN}`
  );

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("Received message:", data);
    const handlers = event_handlers.get(data.type) || [];
    if (handlers.length > 0) {
      handlers.forEach((handler) => {
        storeAPI.dispatch(handler(data["message"]));
      });
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
