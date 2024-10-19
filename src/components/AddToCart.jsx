import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const AddToCart = () => {
  const { dispatch } = useContext(CartContext);
  const [item, setItem] = useState("");

  const addItemToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: item });
    setItem("");
  };

  return (
    <div>
      <h2>Add Item to Cart</h2>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item name"
      />
      <button onClick={addItemToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;
