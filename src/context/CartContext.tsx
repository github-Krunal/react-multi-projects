import React, { createContext, useState } from 'react';
const CartContext=createContext<{totalCartItem:number,setCartItem:any}>({totalCartItem:0,setCartItem:null});
export default CartContext;