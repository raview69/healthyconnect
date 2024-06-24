/* eslint-disable no-empty */
import { baseApi } from "./baseApi";
import {
  setAuthentication,
  removeAuthentication,
} from "../features/authenticationSlice";

const onQueryStartedSignIn = async ({ dispatch, queryFulfilled }) => {
  try {
    dispatch(baseApi.util.resetApiState());
    const { data: signInData } = await queryFulfilled;
    dispatch(setAuthentication(signInData));
  } catch {}
};

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (data) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body: data,
        withCredentials: true,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await onQueryStartedSignIn({ dispatch, queryFulfilled });
      },
      invalidatesTags: ["User"],
    }),
    signOut: builder.mutation({
      query: () => ({
        url: "/api/v1/auth/login",
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(removeAuthentication());
      },
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: "/api/v1/user",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await onQueryStartedSignIn({ dispatch, queryFulfilled });
      },
    }),
    claimToken: builder.mutation({
      query: (data) => ({
        url: "api/v1/session/claim_token",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await onQueryStartedSignIn({ dispatch, queryFulfilled });
      },
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useSignInMutation,
  useClaimTokenMutation,
  useSignOutMutation,
  useSignUpMutation,
} = authApi;
