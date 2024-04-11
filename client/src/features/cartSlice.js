/* eslint-disable no-unused-vars */
// client/src/features/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // local storage persist
import { persistReducer } from "redux-persist"; // Import persistReducer

const initialState = {
  items: [], // Array to store cart items
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
        });
      }

      // Recalculate totals
      state.totalAmount += newItem.price;
      state.totalQuantity++;
      //   console.log("Cart State After Adding:", JSON.stringify(state, null, 2)); //JSON.stringify(state, null, 2): This converts your state (even with Proxies) into a readable JSON string.
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item._id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item._id !== id);
      } else {
        existingItem.quantity--;
      }

      // Recalculate totals
      state.totalAmount -= existingItem.price;
      state.totalQuantity--;
    },
    // Add more reducers as needed (clear cart, update quantity, etc.)
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

const persistConfig = {
  key: "cart", // Key for localStorage
  storage,
};
export { persistConfig };
export const {
  addItemToCart,
  removeItemFromCart /*... other actions*/,
  clearCart,
} = cartSlice.actions;
export default persistReducer(persistConfig, cartSlice.reducer); // Wrap reducer
