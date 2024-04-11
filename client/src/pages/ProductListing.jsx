/* eslint-disable no-unused-vars */
// client/src/pages/ProductListing.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../features/productsSlice";
import ProductCard from "../components/ProductCard";

const ProductListing = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  // Display product items
  return (
    <div className="product-listing-container">
      {/* Display Loading/Error/ States */}
      {isLoading && <div>Loading products...</div>}
      {error && <div>Error: {error}</div>}

      {/* Product Grid */}
      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div>No products found.</div>
      )}
    </div>
  );
};

export default ProductListing;
