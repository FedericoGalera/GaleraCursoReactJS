export default function CartWidget() {
  // Burbuja con valor estático (requisito)
  const quantity = 3;

  return (
    <button
      aria-label="Carrito"
      className="cart-btn"
      title="Carrito de compras"
    >
      {/* Icono simple para evitar dependencias */}
      <span className="cart-icon">🛒</span>
      <span className="cart-badge">{quantity}</span>
    </button>
  );
}