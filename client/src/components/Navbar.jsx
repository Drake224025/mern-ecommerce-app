// components/Navbar.jsx
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <nav>
      <Link to="/">My E-commerce App</Link>
      <Link to="/cart">
        <div className="cart-indicator">Cart ({totalQuantity})</div>
      </Link>
    </nav>
  );
};

export default Navbar;
