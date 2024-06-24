import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/api/v1/user",
      providesTags: ["User"],
    }),
    postUser: builder.mutation({
      query: (data) => ({
        url: "/api/v1/user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: "/api/v1/user",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: () => ({
        url: "/api/v1/user",
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    sendEmail: builder.mutation({
      query: (data) => ({
        url: "/api/v1/user/sendemail",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserQuery,
  usePostUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useSendEmailMutation,
} = userApi;
