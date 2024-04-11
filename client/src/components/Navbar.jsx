// components/Navbar.jsx
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <nav className="container">
      {/* Main container  */}
      <Link to="/" className="brand">
        My Merch Store
      </Link>
      {/* Brand styling */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart" className="button">
            {" "}
            {/* Cart button style */}
            <div className="cart-indicator">Cart ({totalQuantity})</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
