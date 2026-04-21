import React from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  return (
    <div className="success-page">

      <div className="success-box">

        <h1>🎉 Order Placed Successfully!</h1>

        <p>Thank you for shopping with us.</p>

        <p>Your order has been received and is being processed.</p>

        <h3>🧾 Order ID: #{Math.floor(Math.random() * 1000000)}</h3>

        <Link to="/">
          <button className="home-btn">
            Go to Home
          </button>
        </Link>

      </div>

    </div>
  );
};

export default OrderSuccess;