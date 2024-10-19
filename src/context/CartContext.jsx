import React, { createContext, useReducer } from "react";

// Create the Cart Context
export const CartContext = createContext();

// Define initial state
const initialState = {
  cart: [],
};

// Create a reducer to manage state actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

// Create a CartProvider to wrap the entire app
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
