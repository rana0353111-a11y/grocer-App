
import "./ProductPage.css";
import { useCart } from "../context/CartContext";
import ContactUs from "../components/ContactUs";
function ProductPage({ products }) {
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

  
   return (
  <div className="product-page">
    <div className="product-grid">
{products.map((item) => (
        <div key={item.id} className="product-card">
          
          <img src={item.thumbnail} alt={item.title} />

          <h3>{item.title}</h3>

          <p className="price">Rs. {item.price}</p>

          <button
            className="cart-btn"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>

        </div>
      ))}
      <div className="product-footer">
        <ContactUs />
      </div>
    </div>
  </div>
  );
}
export default ProductPage