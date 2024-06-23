import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const accessToken = Cookies.get("accessToken");

const initialState = {
  isAuthenticated: accessToken !== undefined,
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
      Cookies.set("accessToken", payload.data.access_token);
      return state;
    },
    removeAuthentication: (state, { payload }) => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.error = payload?.error;
      Cookies.remove("accessToken");
      return state;
    },
  },
});

export const { setAuthentication, removeAuthentication } =
  authenticationSlice.actions;
export default authenticationSlice.reducer;
