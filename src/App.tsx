import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AddProduct from './ecommerce/component/admincomponent/addProduct';
import AdminDashboard from './ecommerce/component/admincomponent/adminDashboard';
import AdminMain from './ecommerce/component/admincomponent/adminmain';
import BannerAdmin from './ecommerce/component/admincomponent/bannerAdmin';
import CategoriesDetails from './ecommerce/component/admincomponent/categoriesDetails';
import Page1 from './ecommerce/component/admincomponent/page1';
import Page2 from './ecommerce/component/admincomponent/page2';
import ProductList from './ecommerce/component/admincomponent/productList';
import UpdateProduct from './ecommerce/component/admincomponent/updateProduct';
import Cart from './ecommerce/component/cart';
import Navbar from './ecommerce/component/global/navbar';
import Home from './ecommerce/component/home';
import ProductDetails from './ecommerce/component/productDetails';
import SearchProduct from './ecommerce/component/searchProduct';
import Topbar from './ecommerce/component/topbar';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<AdminMain />} >
              <Route path='' element={<AddProduct/>}></Route>
              <Route path='add-product' element={<AddProduct/>}></Route>
              <Route path='product-list' element={<ProductList/>}></Route>
              <Route path='update-product/:productID' element={<UpdateProduct/>}></Route>
              <Route path='dashboard' element={<AdminDashboard/>}></Route>
              <Route path='banner' element={<BannerAdmin/>}></Route>
              <Route path='page2' element={<Page2/>}></Route>
              <Route path='categories' element={<CategoriesDetails/>}></Route>
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
