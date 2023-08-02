import { Middleware } from "@reduxjs/toolkit";
import { event_handlers } from "./event_handlers";

const createSocketMiddleware: Middleware = (storeAPI) => {
  let socket: WebSocket | null = null;

  const isSocketOpen = () => socket && socket.readyState === WebSocket.OPEN;

  const sendWebSocketMessage = (jsonPayload: string) => {
    if (isSocketOpen()) {
      socket!.send(jsonPayload);
    }
  };

  const connectWebSocket = (token: string) => {
    if (!isSocketOpen()) {
      const socketUrl = `ws://192.168.5.111:8002/ws/chat/?token=${token}`;
      socket = new WebSocket(socketUrl);

      socket.onopen = () => {
        console.log("WebSocket connection established.");
      };

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const handlers = event_handlers.get(data.type) || [];
        if (handlers.length > 0) {
          handlers.forEach((handler) => {
            storeAPI.dispatch(handler(data.message));
          });
        }
      };

      socket.onclose = () => {
        console.log("WebSocket connection closed.");
      };
    }
  };

  return (next) => (action) => {
    if (action.type === "SEND_WEBSOCKET_MESSAGE") {
      const jsonPayload = JSON.stringify(action.payload);
      sendWebSocketMessage(jsonPayload);
    } else if (action.type === "SET_WEBSOCKET_CONNECTION") {
      connectWebSocket(action.payload.token);
    }

    return next(action);
  };
};

export default createSocketMiddleware;
