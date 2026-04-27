import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // load from localStorage
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // add to cart (FIXED qty logic)
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.title || product.name,
          price: product.price || 0,
          image: product.thumbnail || product.image,
          qty: 1,
        },
      ];
    });
  };

  // remove from cart (FIXED qty vs quantity bug)
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === id);

      if (!existing) return prev;

      if (existing.qty > 1) {
        return prev.map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        );
      } else {
        return prev.filter((item) => item.id !== id);
      }
    });
  };

  // total price (FIXED safe qty handling)
  const getTotal = () => {
    return cartItems.reduce((sum, item) => {
      return sum + item.price * (item.qty || 1);
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// custom hook
export const useCart = () => {
  return useContext(CartContext);
};