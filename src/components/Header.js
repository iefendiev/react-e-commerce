import React from 'react';
import cart from '../assets/cart.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 className="header-title">E-COMMERCE SHOPPING</h1>
      </Link>
      <div className="header-right">
        <Link to="/cart" className="button-cart">
          <img alt="cart-icon" className="cart-icon" src={cart} />
          My Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;
