import React from "react";
import { useState } from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const openCartHandler = () => {
    setCartOpen(true);
  };

  const closeCartHandler = () => {
    setCartOpen(false);
  };

  return (
    <CartProvider>
      {cartOpen && <Cart onCloseCart={closeCartHandler} />}
      <Header onCartOpen={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
