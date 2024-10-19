import React from "react";
import { CartProvider } from "./context/CartContext";
import AddToCart from "./components/AddToCart";
import Cart from "./components/Cart";
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <div className="App">
        <h1>React Context API Shopping Cart</h1>
        <AddToCart />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
