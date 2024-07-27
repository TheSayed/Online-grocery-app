import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const groceryApi = createApi({
  reducerPath: "groceryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://run.mocky.io/v3/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Array<Product>, void>({
      query: () => "78b00e72-00c0-47b5-84f3-de42b02336a7",
      transformResponse: (response: { products: Array<Product> }) =>
        response.products,
    }),
    getCategories: builder.query<Array<Category>, void>({
      query: () => "c893c10f-79a7-4e25-bf76-8aca2fe6dabb",
      transformResponse: (response: { categories: Array<Category> }) =>
        response.categories,
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = groceryApi;
