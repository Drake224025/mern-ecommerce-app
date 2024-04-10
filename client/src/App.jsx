// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
// ... import other pages
import store from "./store"; //  Set up Redux later

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          {/* ... Routes for other pages */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
