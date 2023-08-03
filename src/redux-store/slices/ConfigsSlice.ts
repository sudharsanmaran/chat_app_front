import { createSlice } from "@reduxjs/toolkit";

export type ConfigsInitialState = {
  loading: boolean;
  error: string | undefined;
  configs: {
    isSearching: boolean;
  };
};

export const initialState: ConfigsInitialState = {
  loading: false,
  error: "",
  configs: {
    isSearching: false,
  },
};

export const Configs = createSlice({
  name: "Configs",
  initialState: initialState,
  reducers: {
    updateIsSearching: (state, action) => {
      state.configs.isSearching = action.payload;
    },
  },
});

export const { updateIsSearching} = Configs.actions;
export default Configs.reducer;
