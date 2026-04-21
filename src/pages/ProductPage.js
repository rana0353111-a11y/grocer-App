import "./ProductPage.css";
import { useCart } from "../context/CartContext";
import MainLayout from "../components/MainLayout";

function ProductPage({ products }) {
  const { setCartItems } = useCart();

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, {
        id: product.id,
        name: product.title || product.name,
        price: product.price || 0,
        image: product.thumbnail || product.image,
        qty: 1,
      }];
    });
  };

  return <MainLayout products={products} addToCart={addToCart} />;
}

export default ProductPage;