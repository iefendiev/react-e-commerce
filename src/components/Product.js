import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ item, addCart }) => {
  return (
    <div className="item-card">
      <div className="item-header">
        <div className="item-header-up">
          <Link to={`/${item.id}`} className="item-title">
            {item.name}
          </Link>
          <div className="item-price">{item.price}</div>
        </div>
        <div className="item-header-down">
          <button onClick={() => addCart(item)} className="item-header-button">
            Add to Cart
          </button>
        </div>
      </div>
      <img alt="item-visual" className="item-image" src={item.image} />
    </div>
  );
};

export default Product;
