import { createSlice } from "@reduxjs/toolkit";
import { GroupType } from "../../Types";

export type ContactsInfoInitialType = {
  loading: boolean;
  error: string | undefined;
  groups: GroupType[];
  selected_group: GroupType | null;
};

export const initialState: ContactsInfoInitialType = {
  loading: false,
  error: "",
  groups: [],
  selected_group: null,
};


export const contactInfoSlice = createSlice({
  name: "contactInfo",
  initialState: initialState,
  reducers: {
    updateSelectedGroup: (state, action) => {
      state.selected_group = action.payload;
    },
    updateUserGroup: (state, action) => {
      state.groups = action.payload;
      state.selected_group = action.payload[0];
    },
    reArrangeUserGroup: (state, action) => {
      const group_id = action.payload["group_id"];
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

export const { updateSelectedGroup, updateUserGroup, reArrangeUserGroup } =
  contactInfoSlice.actions;
export default contactInfoSlice.reducer;
