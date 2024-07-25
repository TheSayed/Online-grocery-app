// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const groceryApi = createApi({
  reducerPath: "groceryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://run.mocky.io/v3/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "78b00e72-00c0-47b5-84f3-de42b02336a7",
      transformResponse: (response: { products: Array<Product> }) =>
        response.products,
    }),
  }),
});

export const { useGetProductsQuery } = groceryApi;
