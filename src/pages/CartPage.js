import React from "react";
import { useCart } from "../context/CartContext";
import "./CartPage.css";
import ContactUs from "../components/ContactUs";
import { Link } from "react-router-dom";
function CartPage() {
  const { cartItems, setCartItems } = useCart();

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty">Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-card">

              <img src={item.image} alt={item.name} />

              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>

                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* TOTAL BOX */}
          <div className="total-box">
            <h3>Total Amount</h3>
            <h2>${totalAmount.toFixed(2)}</h2>
          </div>
          <Link to="/invoice">
  <button className="invoice-btn">
    Generate Invoice
  </button>
</Link>
        </>
      )}
      <ContactUs />
    </div>
  );
}

export default CartPage;