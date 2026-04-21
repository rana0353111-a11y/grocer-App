import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // ✅ load from localStorage
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // ✅ save to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ add to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // ✅ remove from cart
const removeFromCart = (id) => {
  const existing = cartItems.find((item) => item.id === id);

  if (existing.quantity > 1) {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  } else {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }
};

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// custom hook
export const useCart = () => {
  return useContext(CartContext);
};