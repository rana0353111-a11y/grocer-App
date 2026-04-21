import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

import { AuthProvider } from './context/AuthContext'

import { CartProvider } from "./context/CartContext";
import InvoicePage from "./pages/InvoicePage";
import OrderSuccess from "./pages/OrderSuccess";

import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";

import logo from "./assets/images/logo.png";
import eggImg from "./assets/images/egg.jpg";
import breadImg from "./assets/images/bread.jpg";
import jamesImg from "./assets/images/james.jpeg";
import syrupImg from "./assets/images/syrups.png";

function App() {
  const [apiProducts, setApiProducts] = useState([]);

  const [showSidebar, setShowSidebar] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const [products] = useState([
    { id: 1, name: "Eggs", image: eggImg },
    { id: 2, name: "Bread", image: breadImg },
    { id: 3, name: "Syrups", image: syrupImg },
    { id: 4, name: "James", image: jamesImg },
  ]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setApiProducts(data.products))
      .catch((err) => console.log("API Error:", err));
  }, []);

  const filteredHome = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredApi = apiProducts.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {
    setResults([...filteredHome, ...filteredApi]);
  };

  return (
    <AuthProvider>
    <CartProvider>
      <Router>
        <Navbar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          results={results}
          showMap={showMap}
          setShowMap={setShowMap}
          logo={logo}
        />

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage products={filteredHome} />} />
          <Route path="/categories" element={<HomePage products={filteredHome} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<ProductPage products={filteredApi} />} />
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/success" element={<OrderSuccess />} />

        </Routes>
      </Router>
    </CartProvider>
    </AuthProvider>
  );
}
export default App
