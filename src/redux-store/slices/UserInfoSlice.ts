import { createSlice } from "@reduxjs/toolkit";
import { UserInfoType } from "../../Types";


export type UserInfoInitialState = {
  loading: boolean;
  error: string | undefined ;
  user: UserInfoType;
};

export const initialState: UserInfoInitialState = {
  loading: false,
  error: "" ,
  user: {
    id: 'replace',
    last_login: new Date().toLocaleString(),
    is_superuser: false,
    username: 'Guest User',
    is_staff: false,
    created_at: new Date().toLocaleString(),
    updated_at: new Date().toLocaleString(),
    groups: [],
    user_permissions: [],
  },
};


export const userInfo = createSlice({
  name: "userInfo",
  initialState: initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      state.user = action.payload;
      state.error = "";
    }
  },
});

export const {updateUserInfo} = userInfo.actions;
export default userInfo.reducer;