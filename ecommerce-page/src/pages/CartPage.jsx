import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.items.length > 0 ? (
        <div>
          {cart.items.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
          ))}
          <h3>Total: ${cart.total.toFixed(2)}</h3>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
