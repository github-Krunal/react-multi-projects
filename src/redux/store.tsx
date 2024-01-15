import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../services/ecommerce.service";
import CartSlice from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      cart: CartSlice,
      [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware),
  })

  export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch