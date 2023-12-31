import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import your styling
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../App';

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link" activeClassName="active-link" exact>
        Home
      </NavLink>
      <NavLink to="/cart" className="nav-link" activeClassName="active-link">
        Cart
        <span className="cart-count">{cartItems.length}</span>
      </NavLink>
 
    </nav>
  );
};

export default Navbar;
