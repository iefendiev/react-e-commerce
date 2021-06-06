import React from 'react';

const Cart = ({
  cart,
  totalPrice,
  removeItem,
  decreaseCount,
  increaseCount,
}) => {
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
                className="subtract-count-button"
              >
                -
              </button>
              <button
                onClick={() => increaseCount(cartItem)}
                className="add-count-button"
              >
                +
              </button>
              <button
                onClick={() => removeItem(cartItem)}
                className="remove-item-button"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
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
