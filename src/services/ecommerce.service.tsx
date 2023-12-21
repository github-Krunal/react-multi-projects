import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../model/product.model'

export const productApi = createApi({
    reducerPath: 'ProductApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
      getProducts: builder.query<Product[], void>({
        query: () => `Products`,
      }),
    }),
  })
  export const { useGetProductsQuery } = productApi