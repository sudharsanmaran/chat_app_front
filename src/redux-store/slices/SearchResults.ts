import { createSlice } from "@reduxjs/toolkit";
import { UserInfoType } from "../../Types";

export type SearchResultInitialState = {
  loading: boolean;
  error: string | undefined;
  users: UserInfoType[];
};

export const initialState: SearchResultInitialState = {
  loading: false,
  error: "",
  users: [],
};

export const SearchResult = createSlice({
  name: "SearchResult",
  initialState: initialState,
  reducers: {
    updateUserResults: (state, action) => {
      state.users = action.payload.result;
    },
  },
});

export const { updateUserResults } = SearchResult.actions;
export default SearchResult.reducer;
