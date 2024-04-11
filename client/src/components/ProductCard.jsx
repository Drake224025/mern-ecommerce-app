/* eslint-disable react/prop-types */
// src/components/ProductCard.jsx
// ... imports
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <Link to={`/products/${product._id}`}>
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
