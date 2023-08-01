// import { RootState } from "../store";
// import { event_handlers } from "../event_handlers";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export type UserInfoInitialState = {
//   loading: boolean;
//   error: string | undefined;
//   ws: WebSocket | null;
// };

// const initialState = {
//   loading: false,
//   ws: null,
//   error: "",
// };

// export const handleIncomingMessage = createAsyncThunk<
//   void,
//   MessageEvent,
//   { state: RootState }
// >("websocket/handleIncomingMessage", async (event, thunkAPI) => {
//   const { dispatch } = thunkAPI;
//   try {
//     const data = JSON.parse(event.data);
//     console.log("Received message:", data);
//     const event_handler = event_handlers.get(data.type) || null;
//     if (event_handler) {
//       await dispatch(event_handler(data["message"]));
//     }
//   } catch (error) {
//     console.error("Error handling incoming message:", error);
//   }
// });

// // ws.current.onclose = (event: CloseEvent) => {
// //     console.log("WebSocket connection closed:", event.code, event.reason);
// //   };

// // ws.current.onopen = (event: Event) => {
// //     console.log("WebSocket connection opened", event);
// //   };

// const websocketSlice = createSlice({
//   name: "websocket",
//   initialState,
//   reducers: {
//     connectWebSocket(state, action) {
//       const { url } = action.payload;
//       state.ws = new WebSocket(url);
//     },

//     disconnectWebSocket(state) {
//       state.ws?.close();
//       state.ws = null;
//     },
//   },
// });

// export const { connectWebSocket, disconnectWebSocket } = websocketSlice.actions;
// export default websocketSlice.reducer;
