import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { loginType } from "../ts-type/generalType";

export const loginApi = createApi({
  reducerPath: "login/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002/auth",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: loginType) => {
        return {
          url: "/login",
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = loginApi;
