/* eslint-disable no-unused-vars */
// src/pages/Checkout.jsx
import { useState } from "react"; // Import useState
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
  });

  const [errorMessages, setErrorMessages] = useState({}); // State to track errors

  // Handle Input Field Changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset errors
    setErrorMessages({});

    // Basic validation
    const errors = {};
    if (formData.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (formData.email.trim() === "") {
      errors.email = "Email is required";
    }
    // ... add similar checks for address, city

    // Check if any errors exist
    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors); // Store the errors
    } else {
      // Form is valid, proceed with "order submission"

      // 1. Clear the Cart
      dispatch(clearCart());

      // 2. Success Feedback - Choose Option A or B:

      // Option A: Simple Success Message
      //   alert("Order Placed Successfully!"); // Or a more visually styled message

      // Option B: Redirect to Confirmation Page
      // You would need to create a new OrderConfirmation component and add appropriate routing (we can do this later)
      navigate("/order-confirmation", {
        state: { orderData: { items, totalAmount } },
      });
    }
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="order-summary">
        <h3>Order Summary</h3>
        {/* You can list cart items if you want */}
        <h4>Total: ${totalAmount}</h4>
      </div>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Shipping Details</h2>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name" // Important for state updates
            required
            value={formData.name} // Value from state
            onChange={handleChange} // State update handler
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        {/* (Add fields for State/Province, Zip Code if needed) */}

        <h2>Payment Details</h2>
        {/* Placeholder for now, we'll come back to payments later */}
        {/* Display error messages below fields */}
        {errorMessages.name && (
          <div className="error-message">{errorMessages.name}</div>
        )}
        {errorMessages.email && (
          <div className="error-message">{errorMessages.email}</div>
        )}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
