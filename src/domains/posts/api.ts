import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "src/service/axiosBaseQuery";
import { POSTS } from "./types";

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["POSTS"],
  endpoints: (builder) => ({
    getPosts: builder.query<POSTS[], Partial<string>>({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const hooks = {
  useGetPosts: postsApi.useGetPostsQuery,
};

export default postsApi;
