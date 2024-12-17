import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { RootState } from "../app/store";

export interface AuthState {
  isLoggedIn: boolean;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  } | null;
  token: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      Cookies.set("isLoggedIn", "true");
      Cookies.set("user", JSON.stringify(action.payload.user));
      Cookies.set("token", action.payload.token ?? "");
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = JSON.parse(JSON.stringify(action.payload.user));
      state.token = action.payload.token;
    },
    logout: (state) => {
      Cookies.remove("isLoggedIn");
      Cookies.remove("user");
      Cookies.remove("token");
      state.user = null;
      state.token = null;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
