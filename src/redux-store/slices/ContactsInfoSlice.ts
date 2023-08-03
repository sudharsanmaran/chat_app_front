import { createSlice } from "@reduxjs/toolkit";
import { GroupType, UserInfoType } from "../../Types";

export type ContactsInfoInitialType = {
  loading: boolean;
  error: string | undefined;
  groups: GroupType[];
  selected_type: "group" | "user" | null;
  selected_group: GroupType | null;
  selected_user: UserInfoType | null;
};

export const initialState: ContactsInfoInitialType = {
  loading: false,
  error: "",
  groups: [],
  selected_type: null,
  selected_group: null,
  selected_user: null,
};

export const contactInfoSlice = createSlice({
  name: "contactInfo",
  initialState: initialState,
  reducers: {
    updateSelectedGroup: (state, action) => {
      state.selected_group = action.payload;
      state.selected_type = "group";
    },
    updateSelectedUser: (state, action) => {
      state.selected_user = action.payload;
      state.selected_type = "user";
    },
    updateUserGroup: (state, action) => {
      state.groups = action.payload;
      state.selected_type = "group";
      state.selected_group = action.payload[0];
    },

    reArrangeUserGroup: (state, action) => {
      const group_id = action.payload.message.chat_room;
      const elementToRemove = state.groups.find((g) => g.id === group_id);
      if (elementToRemove) {
        const indexToRemove = state.groups.indexOf(elementToRemove);
        if (indexToRemove !== -1) {
          state.groups.splice(indexToRemove, 1);

          state.groups.unshift(elementToRemove);
        }
      }
    },
  },
});

export const {
  updateSelectedGroup,
  updateUserGroup,
  reArrangeUserGroup,
  updateSelectedUser,
} = contactInfoSlice.actions;

export default contactInfoSlice.reducer;
