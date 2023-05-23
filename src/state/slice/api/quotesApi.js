import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quotesApi = createApi({
  reducerPath: "quotesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.quotable.io/",
  }),
  endpoints: (builder) => ({
    getAllQuotes: builder.query({
      query: () => "quotes/random?limit=40",
    }),
  }),
});

export const { useGetAllQuotesQuery } = quotesApi;
