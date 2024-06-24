import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const accessToken = localStorage.getItem("token");
console.log(accessToken);

const initialState = {
  isAuthenticated: accessToken !== null,
  accessToken: accessToken || null,
  error: null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAuthentication: (state, { payload }) => {
      state.isAuthenticated = true;
      state.accessToken = payload.data.access_token;
      state.error = null;
      Cookies.set("token", payload.data.access_token);
      return state;
    },
    removeAuthentication: (state, { payload }) => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.error = payload?.error;
      Cookies.remove("token");
      return state;
    },
  },
});

export const { setAuthentication, removeAuthentication } =
  authenticationSlice.actions;
export default authenticationSlice.reducer;
