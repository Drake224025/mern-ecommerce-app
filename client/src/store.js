/* eslint-disable no-unused-vars */
// client/src/store.js
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import productsReducer from "./features/productsSlice";
import cartReducer from "./features/cartSlice";
import { persistConfig } from "./features/cartSlice"; // Import persistConfig

const persistedCartReducer = persistReducer(persistConfig, cartReducer); // Wrap cart reducer

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
