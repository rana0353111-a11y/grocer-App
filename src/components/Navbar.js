import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../context/CartContext";

import {
  FaBars,
  FaShoppingCart,
  FaChevronDown,
  FaSearch,
} from "react-icons/fa";

function Navbar({
  showSidebar,
  setShowSidebar,
  search,
  setSearch,
  handleSearch,
  results,
  showMap,
  setShowMap,
  logo,

 
}) {
   const { cartItems } = useCart();

<span className="cart-badge">
  {cartItems.length}
</span>
  return (
    <>
    

    <div className={`side-menu ${showSidebar ? "open" : ""}`}>

  <h2>salam as a guest</h2>

  <ul>
    <li>My profile</li>
    <li>My orders</li>
    <li>Grocer club</li>
    <li>Live chat</li>
    <li>FAQs</li>
    <li>Mobile App</li>
    <li>About us</li>
    <Link to="/login" className="login" >
      <li>Sign In</li>
    </Link>
  </ul>

</div>
      {/* NAVBAR */}
      <header className={`top-navbar ${showSidebar ? "navbar-shift" : ""}`}>

        {/* TOP ROW */}
        <div className="navbar-top">

          {/* MENU */}
          <button
            className="menu-btn"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <FaBars />
          </button>

          {/* LOGO */}
          <Link to="/product" className="logo">
            <img src={logo} alt="logo" width="120" />
          </Link>

          {/* DELIVERY */}
          <span
            className="delivery"
            onClick={() => setShowMap(true)}
            style={{ cursor: "pointer" }}
          >
            Delivery to <br />
            Lahore <FaChevronDown size={12} />
          </span>

          {/* CART */}
         <Link to="/cart" className="cart-icon">
  <FaShoppingCart />
  {cartItems.length > 0 && (
    <span className="cart-badge">{cartItems.length}</span>
  )}
</Link>

        </div>

        {/* BOTTOM ROW */}
        <div className="navbar-bottom">

          {/* CATEGORIES */}
          <Link to="/categories">
            <button className="categories">
              <FaBars /> Categories
            </button>
          </Link>

          {/* SEARCH */}
          <div className="search-wrapper">

            <input
              type="text"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleSearch()
              }
            />

            <button className="search-btn" onClick={handleSearch}>
              <FaSearch size={16} />
            </button>

            {/* RESULTS */}
            {results && results.length > 0 && (
              <div className="search-results">
                {results.map((item) => (
                  <div key={item.id} className="search-card">
                    <img src={item.image} alt={item.name} />
                    <h4>{item.name}</h4>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </header>

      {/* MAP MODAL */}
      {showMap && (
        <div className="map-modal">
          <div className="map-content">

            <button
              className="close-btn"
              onClick={() => setShowMap(false)}
            >
              ×
            </button>

            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=67.0%2C24.8%2C67.2%2C25.0&layer=mapnik"
              title="map"
              width="600"
              height="400"
              style={{ border: "none" }}
            />

          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;