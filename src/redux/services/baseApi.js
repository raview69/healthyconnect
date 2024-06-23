import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { removeAuthentication } from "../features/authenticationSlice";
// import "dotenv/config";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://hc-backend-express.vercel.app",
  timeout: 30000,
  prepareHeaders: (headers, { getState }) => {
    const {
      authentication: { accessToken },
    } = getState();

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const errorMessage = { error: result.error.data?.errors };
    api.dispatch(removeAuthentication(errorMessage));
  }
  return result;
};

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Product", "User"],
  endpoints: () => ({}),
});
