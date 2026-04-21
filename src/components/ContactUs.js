import React from "react";
import "./ContactUs.css";
import { FaFacebook } from "react-icons/fa";

import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";





const ContactUs = () => {
  return (
    <div className="footer">

      <h2>Contact Us</h2>

      <p>Email: support@yourstore.com</p>
      <p>Phone: +92 300 0000000</p>
      <p>Address: Lahore, Pakistan</p>

      {/* PAYMENT METHODS */}
      <div className="wallets">
        <h3>We Accept</h3>

        <div className="icons">
          <span className="wallet">JazzCash</span>
          <span className="wallet">Easypaisa</span>
          <span className="wallet">Visa</span>
        </div>
      </div>

      {/* SOCIAL */}
      <div className="social">
        <h3>Follow Us</h3>

        <div className="icons">
  <a
    href="https://www.facebook.com/Ahmed RaJput"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebook className="icon facebook" />
  </a>
</div>
      </div>

    </div>
  );
};

export default ContactUs;