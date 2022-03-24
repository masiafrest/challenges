import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const desafioFrontEndApi = createApi({
  reducerPath: "desafioFrontEndApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://boiling-mountain-49639.herokuapp.com/desafio-frontend",
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => `/`,
      transformResponse: (res) => res.sort((a) => (a.online ? -1 : 1)),
    }),
  }),
});

export const { useGetDataQuery } = desafioFrontEndApi;
