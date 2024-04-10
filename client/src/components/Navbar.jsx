// components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">My E-commerce App</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;
