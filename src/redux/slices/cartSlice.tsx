import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Icart{
    Price:number
    TotalItem:number
}
let initialState:Icart = {
  Price: 0,
  TotalItem: 0,
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItem: (state: any, action: PayloadAction<Icart>) => {
      state.Price = action.payload.Price;
      state.TotalItem = action.payload.TotalItem;
    },
   
  },
});

export const { addItem } = CartSlice.actions;

export default CartSlice.reducer;
