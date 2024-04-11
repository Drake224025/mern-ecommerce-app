// src/pages/OrderConfirmation.jsx
import { useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderData } = location.state || {}; // Destructure orderData

  return (
    <div className="order-confirmation-page">
      <h1>Order Confirmation</h1>
      <p>Thank you for your order! Your order has been placed successfully.</p>

      {orderData && ( // Display summary if orderData exists
        <div className="order-summary">
          <h3>Order Summary</h3>
          <ul>
            {orderData.items.map((item) => (
              <li key={item._id}>
                {item.name} - Qty: {item.quantity}
              </li>
            ))}
          </ul>
          <h4>Total: ${orderData.totalAmount}</h4>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
