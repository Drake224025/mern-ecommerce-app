/* eslint-disable no-unused-vars */
// client/src/pages/ProductListing.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../features/productsSlice";

const ProductListing = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  // Display loading state
  if (isLoading) {
    return <div>Loading products...</div>;
  }

  // Display error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Only render product items when you actually have products ready
  if (products.length === 0) {
    return <div>No products found.</div>; // Or a nicer placeholder
  }

  // Display product items
  return <div>{/* Map through 'products' and render product cards */}</div>;
};

export default ProductListing;
