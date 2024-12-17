import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { signupType } from "../ts-type/generalType";

export const signupApi = createApi({
  reducerPath: "signup/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002/auth",
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body: signupType) => {
        return {
          url: "/signup",
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

export const { useSignupMutation } = signupApi;
