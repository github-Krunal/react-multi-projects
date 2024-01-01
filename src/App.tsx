import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminMain from './ecommerce/component/admincomponent/adminmain';
import Page1 from './ecommerce/component/admincomponent/page1';
import Page2 from './ecommerce/component/admincomponent/page2';
import Cart from './ecommerce/component/cart';
import Home from './ecommerce/component/home';
import ProductCart from './ecommerce/component/ProductCart';
import ProductDetails from './ecommerce/component/productDetails';
import SearchProduct from './ecommerce/component/searchProduct';
import Topbar from './ecommerce/component/topbar';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Topbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<AdminMain />} >
              <Route path='page1' element={<Page1/>}></Route>
              <Route path='page2' element={<Page2/>}></Route>
            </Route>
            <Route path="/search" element={<SearchProduct />} />
            <Route path="/product-details/:productID" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
