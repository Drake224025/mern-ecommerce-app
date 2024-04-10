// client/src/store.js
import { configureStore } from "@reduxjs/toolkit";

// Example - create a products reducer later
import productsReducer from "./features/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    // Add more reducers for cart, etc. later
  },
});

export default store;
