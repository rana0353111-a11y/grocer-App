import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import ContactUs from "./ContactUs";
import "../pages/HomePage.css";

import eggImg from "../assets/images/egg.jpg";
import breadImg from "../assets/images/bread.jpg";
import syrupImg from "../assets/images/syrups.png";
import chocolateImg from "../assets/images/chocolates.jpeg";
import oatImg from "../assets/images/oat.jpeg";

const categories = [
  {
    title: "Breakfast Essential",
    items: [
      { id: 1, name: "Eggs (12 pcs)", image: eggImg, price: 380 },
      { id: 2, name: "Bread", image: breadImg, price: 80 },
      { id: 3, name: "Syrups", image: syrupImg, price: 350 },
      { id: 4, name: "Milk (1L)", image: chocolateImg, price: 180 },
      { id: 5, name: "Chocolates", image: chocolateImg, price: 150 },
      { id: 6, name: "Oats (400g)", image: oatImg, price: 320 },
    ],
  },
  {
    title: "Milk & Dairy",
    items: [
      { id: 7, name: "Milk (1L)", image: eggImg, price: 180 },
      { id: 8, name: "Butter (200g)", image: breadImg, price: 420 },
      { id: 9, name: "Yogurt (500g)", image: syrupImg, price: 120 },
      { id: 10, name: "Cream (200ml)", image: chocolateImg, price: 160 },
      { id: 11, name: "Cheese (200g)", image: oatImg, price: 550 },
      { id: 12, name: "Ice Cream (500ml)", image: eggImg, price: 380 },
    ],
  },
];

const MainLayout = ({ products = [] }) => {
  const { setCartItems } = useCart();

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

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (item) => {
    setSelectedProduct(item);

    setTimeout(() => {
      document
        .getElementById("product-detail-view")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="main-layout">

      {/* PRODUCT DETAIL */}
      {selectedProduct && (
        <div
          id="product-detail-view"
          style={{
            width: "100%",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            borderBottom: "2px solid #f0f0f0",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={selectedProduct.image || selectedProduct.thumbnail}
            alt={selectedProduct.name || selectedProduct.title}
            style={{
              width: "100%",
              height: "350px",
              objectFit: "contain",
              background: "#f5f5f5",
            }}
          />

          <div style={{ padding: "20px" }}>
            <h2>{selectedProduct.name || selectedProduct.title}</h2>

            <p style={{ fontSize: "22px", color: "orange", fontWeight: "bold" }}>
              Rs. {selectedProduct.price}
            </p>

            <p style={{ color: "#666", fontSize: "14px" }}>
              Fresh aur high quality product. Ghar baith ke order karo.
            </p>

            <button
              onClick={() => addToCart(selectedProduct)}
              style={{
                marginTop: "10px",
                background: "orange",
                color: "white",
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                width: "100%",
              }}
            >
              🛒 Add to Cart
            </button>

            <button
              onClick={() => setSelectedProduct(null)}
              style={{
                marginTop: "10px",
                background: "#eee",
                color: "#333",
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                width: "100%",
              }}
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}

      {/* PRODUCTS */}
      <div className="product-page">
        <div className="product-grid">
          {products.map((item) => (
            <div
              key={item.id}
              className="product-card"
              onClick={() => handleProductClick(item)}
            >
              <img
                src={item.thumbnail || item.image}
                alt={item.title || item.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                  marginTop: "10px",
                }}
              />

              <h3>{item.title || item.name}</h3>
              <p className="price">Rs. {item.price}</p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(item);
                }}
                style={{
                  marginTop: "10px",
                  background: "orange",
                  color: "#fff",
                  padding: "10px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                🛒 Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="content">
        <h1>Categories</h1>

        {categories.map((category, index) => (
          <div key={index} className="breakfast">
            <h3>{category.title}</h3>

            <div className="breakfast-image">
              {category.items.map((item) => (
                <div key={item.id} className="card">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ objectFit: "contain" }}
                  />
                  <h3>{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CONTACT */}
      <ContactUs />

    </div>
  );
};

export default MainLayout;