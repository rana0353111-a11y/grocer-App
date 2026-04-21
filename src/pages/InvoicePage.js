import React from "react";
import { useCart } from "../context/CartContext";
import "./Invoice.css";
import { useNavigate } from "react-router-dom";

const InvoicePage = () => {
  const { cartItems, setCartItems } = useCart();
  const navigate = useNavigate();

  const total = cartItems?.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  ) || 0;

  const placeOrder = () => {
    setCartItems([]);
    navigate("/success");
  };

  return (
    <div className="invoice">

      <h1>🧾 Invoice</h1>

      <div className="invoice-box">

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="invoice-item">

              <h4>{item.name}</h4>

              <p>
                {item.qty} x ${item.price} ={" "}
                <b>${item.qty * item.price}</b>
              </p>

            </div>
          ))
        )}

        <hr />

        <h2>Total: ${total.toFixed(2)}</h2>

        {cartItems.length > 0 && (
          <button onClick={placeOrder}>
            Place Order
          </button>
        )}

      </div>

    </div>
  );
};

export default InvoicePage;