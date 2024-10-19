import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const removeItemFromCart = (index) => {
    dispatch({ type: "REMOVE_ITEM", payload: index });
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItemFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
