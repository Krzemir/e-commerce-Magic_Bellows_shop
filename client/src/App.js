import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Product from './components/pages/product/Product';
import Cart from './components/pages/cart/Cart';
import Checkout from './components/pages/checkout/Checkout';
import OrderDetails from './components/pages/order/Order';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order/:id" element={<OrderDetails />} />
    </Routes>
  );
}

export default App;
