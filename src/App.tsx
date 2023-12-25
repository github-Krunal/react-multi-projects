import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './ecommerce/component/cart';
import ProductCart from './ecommerce/component/ProductCart';
import Topbar from './ecommerce/component/topbar';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Topbar />}>
            <Route path="/" element={<ProductCart />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
