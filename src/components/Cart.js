import React from 'react';

const Cart = ({ cart, totalPrice, removeItem, decreaseCount }) => {
  // console.log('cartjs', cart);

  return (
    <div>
      <ul className="cart-ul">
        {cart.map((cartItem) => (
          <div className="cart-list" key={cartItem.id}>
            <img className="cart-image" src={cartItem.image} alt="cart-item" />

            <li>{cartItem.name}</li>
            <div>{cartItem.price}</div>
            <div>x{cartItem.count}</div>
            <div className="cart-button-groups">
              <button
                onClick={() => decreaseCount(cartItem)}
                className="subtract-item-button"
              >
                -
              </button>
              <button
                onClick={() => removeItem(cartItem)}
                className="remove-item-button"
              >
                X
              </button>
            </div>
          </div>
        ))}
      </ul>
      <div className="total-price">Total Price: {totalPrice}</div>
    </div>
  );
};

export default Cart;
