import { createSlice } from "@reduxjs/toolkit";
import { MessageType } from "../../Types";

type messageInitialType = {
  loading: boolean;
  error: string;
  group_messages: Record<string, string[]>;
};

const initialState: messageInitialType = {
  loading: false,
  error: "",
  group_messages: {},
};

export const messageSlice = createSlice({
  name: "message",
  initialState: initialState,
  reducers: {
    updateGroupMessages: (state, action) => {
      state.group_messages[action.payload.group_id] = action.payload.messages,
      state.error = "";
    },
    appendGroupMessage: (state, action) => {
      const groupId = action.payload.message.chat_room;
      const currentMessages = state.group_messages[groupId] || [];
      currentMessages.push(action.payload.message);
      state.group_messages[groupId] = currentMessages;
      state.error = "";
    },
  },
});

export const { updateGroupMessages, appendGroupMessage } = messageSlice.actions;
export default messageSlice.reducer;
