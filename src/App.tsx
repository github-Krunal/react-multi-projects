import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CartContext from './context/CartContext';
import Cart from './ecommerce/component/cart';
import ProductCart from './ecommerce/component/ProductCart';
import Topbar from './ecommerce/component/topbar';

function App() {
  const [totalCartItem,setCartItem]=useState<number>(0)
  return (
    <div>
          <CartContext.Provider value={{
            totalCartItem:totalCartItem,
            setCartItem
          }}>
      <Router>
        <Routes>
          <Route element={<Topbar />}>
            <Route path="/" element={<ProductCart />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
          </CartContext.Provider>
    </div>
  );
}

export default App;
