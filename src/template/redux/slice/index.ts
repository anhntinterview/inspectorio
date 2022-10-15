import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coreSliceApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com",
  }),
  tagTypes: [
    "Users", 
  ],
  endpoints: () => ({}),
});

export default coreSliceApi.reducer;
