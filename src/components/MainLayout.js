import React, { useState } from "react";
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
  {
    title: "Fruits & Vegetables",
    items: [
      { id: 13, name: "Apple (1kg)", image: eggImg, price: 280 },
      { id: 14, name: "Banana (1 dozen)", image: breadImg, price: 120 },
      { id: 15, name: "Carrot (1kg)", image: syrupImg, price: 80 },
      { id: 16, name: "Tomato (1kg)", image: chocolateImg, price: 60 },
      { id: 17, name: "Mango (1kg)", image: oatImg, price: 200 },
      { id: 18, name: "Grapes (500g)", image: breadImg, price: 180 },
    ],
  },
  {
    title: "Meat & Seafood",
    items: [
      { id: 19, name: "Chicken (1kg)", image: eggImg, price: 520 },
      { id: 20, name: "Fish (1kg)", image: breadImg, price: 600 },
      { id: 21, name: "Mutton (1kg)", image: syrupImg, price: 1400 },
      { id: 22, name: "Prawns (500g)", image: chocolateImg, price: 800 },
      { id: 23, name: "Beef (1kg)", image: oatImg, price: 900 },
      { id: 24, name: "Crab (500g)", image: eggImg, price: 700 },
    ],
  },
  {
    title: "Daal, Rice, Atta & Cheeni",
    items: [
      { id: 25, name: "Rice (5kg)", image: eggImg, price: 950 },
      { id: 26, name: "Daal Masoor (1kg)", image: breadImg, price: 280 },
      { id: 27, name: "Atta (10kg)", image: syrupImg, price: 1100 },
      { id: 28, name: "Sugar (1kg)", image: chocolateImg, price: 140 },
      { id: 29, name: "Salt (800g)", image: oatImg, price: 60 },
      { id: 30, name: "Maida (1kg)", image: breadImg, price: 120 },
    ],
  },
  {
    title: "Edible Oils & Ghee",
    items: [
      { id: 31, name: "Cooking Oil (1L)", image: eggImg, price: 480 },
      { id: 32, name: "Ghee (1kg)", image: breadImg, price: 1800 },
      { id: 33, name: "Olive Oil (500ml)", image: syrupImg, price: 950 },
      { id: 34, name: "Butter Oil (200g)", image: chocolateImg, price: 380 },
      { id: 35, name: "Sunflower Oil (1L)", image: oatImg, price: 460 },
      { id: 36, name: "Canola Oil (1L)", image: eggImg, price: 500 },
    ],
  },
  {
    title: "Spices & Herbs",
    items: [
      { id: 37, name: "Salt (800g)", image: eggImg, price: 60 },
      { id: 38, name: "Black Pepper (100g)", image: breadImg, price: 180 },
      { id: 39, name: "Turmeric (100g)", image: syrupImg, price: 80 },
      { id: 40, name: "Cumin (100g)", image: chocolateImg, price: 120 },
      { id: 41, name: "Coriander (100g)", image: oatImg, price: 70 },
      { id: 42, name: "Chili Powder (100g)", image: breadImg, price: 90 },
    ],
  },
  {
    title: "Sauces & Pastes",
    items: [
      { id: 43, name: "Ketchup (500g)", image: eggImg, price: 180 },
      { id: 44, name: "Mayonnaise (500g)", image: breadImg, price: 280 },
      { id: 45, name: "Chili Sauce (300ml)", image: syrupImg, price: 150 },
      { id: 46, name: "Garlic Paste (300g)", image: chocolateImg, price: 120 },
      { id: 47, name: "Soy Sauce (300ml)", image: oatImg, price: 140 },
      { id: 48, name: "Mustard (200g)", image: breadImg, price: 160 },
    ],
  },
];

const MainLayout = ({ products, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryClick = (category) => {
    if (selectedCategory?.title === category.title) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
      setSelectedProduct(null);
    }
  };

  const handleProductClick = (item) => {
    setSelectedProduct(item);
    setTimeout(() => {
      document.getElementById("product-detail-view")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="main-layout">

      {/* PRODUCT DETAIL VIEW - Top pe full width */}
     {selectedProduct && (
  <div id="product-detail-view" style={{
    width: "100%",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    borderBottom: "2px solid #f0f0f0",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  }}>

    {/* TOP - Image full width */}
    <img
      src={selectedProduct.image || selectedProduct.thumbnail}
      alt={selectedProduct.name || selectedProduct.title}
      style={{
        width: "100%",
        height: "350px",
        objectFit: "cover",
      }}
    />

    {/* MIDDLE - Details */}
    <div style={{
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    }}>
      <h2 style={{ fontSize: "24px" }}>
        {selectedProduct.name || selectedProduct.title}
      </h2>
      <p style={{ fontSize: "22px", color: "orange", fontWeight: "bold" }}>
        Rs. {selectedProduct.price}
      </p>
      <p style={{ color: "#666", fontSize: "14px" }}>
        Fresh aur high quality product. Ghar baith ke order karo, seedha delivery!
      </p>
    </div>

    {/* BOTTOM - Buttons ek line mein */}
    <div style={{
      display: "flex",
      flexDirection: "row",
      gap: "12px",
      padding: "0 20px 20px 20px",
    }}>
      <button
        onClick={() => {
          addToCart({
            id: selectedProduct.id,
            name: selectedProduct.name || selectedProduct.title,
            price: selectedProduct.price,
            image: selectedProduct.image || selectedProduct.thumbnail,
            thumbnail: selectedProduct.image || selectedProduct.thumbnail,
            title: selectedProduct.name || selectedProduct.title,
          });
        }}
        style={{
          flex: 1,
          background: "orange",
          color: "white",
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        🛒 Add to Cart
      </button>
      <button
        onClick={() => setSelectedProduct(null)}
        style={{
          flex: 1,
          background: "#eee",
          color: "#333",
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        ✕ Close
      </button>
    </div>

  </div>
)}

      {/* 1. API PRODUCTS - Sabse Pehle */}
      <div className="product-page">
        <div className="product-grid">
          {products && products.map((item) => (
            <div
              key={item.id}
              className="product-card"
              onClick={() => handleProductClick(item)}
              style={{ cursor: "pointer" }}
            >
              <img src={item.thumbnail || item.image} alt={item.title || item.name} />
              <h3>{item.title || item.name}</h3>
              <p className="price">Rs. {item.price || ""}</p>
              {addToCart && (
                <button
                  className="cart-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(item);
                  }}
                >
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2. HOME CATEGORIES - Beech Mein */}
      <div className="content">
        <h1>Categories</h1>
        {categories.map((category, index) => (
          <div key={index} className="breakfast">
            <h2>{category.title}</h2>

            {/* Category Cards */}
            <div className="breakfast-image">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="card"
                  onClick={() => handleCategoryClick(category)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                </div>
              ))}
            </div>

            {/* Click hone pe products show hon */}
            {selectedCategory?.title === category.title && (
              <div className="selected-products">
                <h3>🛒 {category.title}</h3>
                <div className="product-grid">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className="product-card"
                      onClick={() => handleProductClick(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={item.image} alt={item.name} />
                      <h3>{item.name}</h3>
                      <p className="price">Rs. {item.price}</p>
                      <button
                        className="cart-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            image: item.image,
                            thumbnail: item.image,
                            title: item.name,
                          });
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 3. FOOTER */}
      <ContactUs />

    </div>
  );
};

export default MainLayout;