import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { getTotalQuantity } = useCart();
  const quantity = getTotalQuantity();

  return (
    <Link to="/cart" className="cart-btn" aria-label="Carrito">
      <FiShoppingCart className="cart-icon" />
      {quantity > 0 && <span className="cart-badge">{quantity}</span>}
    </Link>
  );
}
