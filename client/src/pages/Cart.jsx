/* eslint-disable no-unused-vars */
// src/pages/Cart.jsx
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../features/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {items.map((item) => (
            <div key={item._id} className="cart-item">
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemoveFromCart(item._id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {/* Display Total Amount */}
      <div className="cart-total">
        <h3>Total: ${totalAmount}</h3>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
