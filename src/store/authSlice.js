import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false, // by-default user is not authenticated
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // these are actually actions > login, logout, etc
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      (state.status = false), (state.userData = null);
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
