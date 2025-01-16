import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>eCommerce Store</h1>
    <Link to="/">Home</Link>
    <Link to="/cart">Cart</Link>
  </nav>
);

export default Navbar;
