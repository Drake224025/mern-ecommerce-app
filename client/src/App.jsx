// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import store from "./store"; //  Set up Redux
// ... import other pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductListing from "./pages/ProductListing";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
