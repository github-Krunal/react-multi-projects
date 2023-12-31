import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../model/product.model'

export const productApi = createApi({
    reducerPath: 'ProductApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    tagTypes:['deleteCart'],
    endpoints: (builder) => ({
      getProducts: builder.query<Product[], void>({
        query: () => `Products`,
      }),
      getDashboardProduct: builder.query<Product[], void>({
        query: () => `DashboardProduct`,
      }),
      getAllData: builder.query<any[], string>({
        query: (objectName) => `${objectName}`,
      }),
      getSingleProduct: builder.query<Product, number>({
        query: (id) => `Products/${id}`,
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
        providesTags:['deleteCart']
      }),

      deleteCart: builder.mutation({
        query: (cartID) => ({
          url: `/Carts/${cartID}`,
          method: 'DELETE',
        }),
        invalidatesTags:['deleteCart']
      }),
    }),
  })
  export const { useGetProductsQuery,useCreateCartMutation,useGetCartQuery,useDeleteCartMutation,useGetSingleProductQuery,useGetAllDataQuery,useGetDashboardProductQuery } = productApi