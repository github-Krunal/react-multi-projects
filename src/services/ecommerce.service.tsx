import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../model/product.model'

export const productApi = createApi({
    reducerPath: 'ProductApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
      getProducts: builder.query<Product[], void>({
        query: () => `Products`,
      }),
      createCart: builder.mutation({
        query: (product:Product) => ({
          url: '/Carts', 
          method: 'POST',
          body: product, 
        }),
      }),
      getCart: builder.query<Product[], void>({
        query: () => `Carts`,
      }),
    }),
  })
  export const { useGetProductsQuery,useCreateCartMutation,useGetCartQuery } = productApi