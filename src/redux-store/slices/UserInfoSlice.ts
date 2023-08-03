import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserInfoType } from "../../Types";
import { login } from "../../APIs/backend_service";

export type UserInfoInitialState = {
  loading: boolean;
  error: string | undefined;
  user: UserInfoType;
  isAuthenticated: boolean;
};

export const initialState: UserInfoInitialState = {
  loading: false,
  error: "",
  user: {
    id: "replace",
    last_login: new Date().toLocaleString(),
    is_superuser: false,
    username: "Guest User",
    is_staff: false,
    created_at: new Date().toLocaleString(),
    updated_at: new Date().toLocaleString(),
    groups: [],
    user_permissions: [],
  },
  isAuthenticated: false,
};

export const login_thunk = createAsyncThunk(
  "userInfo/login",
  (data: { username: string; password: string }) => {
    return login(data);
  }
);
export type LoginResponse = {
  type: string,
  payload: {
    access: string; 
    refresh: string; 
  };
}

export const userInfo = createSlice({
  name: "userInfo",
  initialState: initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      state.user = action.payload;
      state.error = "";
    },
    updateAuthentication: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login_thunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(login_thunk.fulfilled, (state) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = "";
    });

    builder.addCase(login_thunk.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.error.message;
    });

  },
});

export const { updateUserInfo, updateAuthentication } = userInfo.actions;
export default userInfo.reducer;
