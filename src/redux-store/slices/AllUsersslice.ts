import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserInfoType } from "../../Types";
import { fetchUsers } from "../../APIs/backend_service";

export type AllUserInitialState = {
  loading: boolean;
  error: string | undefined;
  users: UserInfoType[];
};

export const initialState: AllUserInitialState = {
  loading: false,
  error: "",
  users: [],
};

export const fetchUsersThunk = createAsyncThunk("allUsers/fetchUsers", () => {
  return fetchUsers();
});

export const allUsers = createSlice({
  name: "allUsers",
  initialState: initialState,
  reducers: {
    // append users
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersThunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsersThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });

    builder.addCase(fetchUsersThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default allUsers.reducer;
