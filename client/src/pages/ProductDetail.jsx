/* eslint-disable no-unused-vars */
// client/src/pages/ProductDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByIdAsync } from "../features/productsSlice";
// Assuming you'll add fetching logic to Redux

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { product, isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductByIdAsync(productId));
  }, [dispatch, productId]);

  return (
    <div className="product-detail-page">
      {isLoading && <div>Loading product...</div>}
      {error && <div>Error: {error}</div>}

      {product && (
        <div>
          {/* Display Product Details: */}
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>${product.price}</p>
          <p>{product.description}</p>
          {/* Add-to-Cart Button (if you want) */}
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
