import { FiShoppingCart } from "react-icons/fi";

export default function CartWidget() {
  const quantity = 3;

  return (
    <button
      aria-label="Carrito"
      className="cart-btn"
      title="Carrito de compras"
    >
      <FiShoppingCart className="cart-icon" />
      <span className="cart-badge">{quantity}</span>
    </button>
  );
}