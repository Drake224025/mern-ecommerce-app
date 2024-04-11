// client/src/features/productsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductById } from "../utils/api";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await fetchProducts();
    return products;
  }
);

export const fetchProductByIdAsync = createAsyncThunk(
  "products/fetchProductById",
  async (productId) => {
    return await fetchProductById(productId); // Call api.js function
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  // Handling loading/success/error states from the async thunk
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.product = null; // Reset product on new fetch
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductByIdAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.product = null;
        state.error = action.error.message;
      });
  },
});

// Export reducer
export default productsSlice.reducer;
