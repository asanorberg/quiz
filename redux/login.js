import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    loggedIn: false,
    username: null,
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.username = null;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
