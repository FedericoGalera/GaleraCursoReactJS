// src/components/Cart.jsx

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { cart, clearCart, getTotalPrice } = useCart();

  // Carrito vacío
  if (!cart || cart.length === 0) {
    return (
      <main className="container">
        <h1 className="title">Tu carrito está vacío</h1>
        <Link to="/" className="btn">Volver al catálogo</Link>
      </main>
    );
  }

  const total = getTotalPrice();

  return (
    <main className="container">
      <h1 className="title">Carrito de compras</h1>

      <section className="cart-list">
        {cart.map((item) => (
          <article key={item.id} className="cart-item">
            <div className="cart-thumb">
              <img
                src={item.pictureUrl || "/imgs/placeholder.png"}
                alt={item.title}
              />
            </div>

            <div className="cart-info">
              <h3 className="cart-title">{item.title}</h3>
              <p className="cart-quantity">Cantidad: {item.quantity}</p>
              <p className="cart-price">
                Subtotal: ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </article>
        ))}
      </section>

      <div className="cart-summary">
        <h2>Total: ${total.toFixed(2)}</h2>

        <button className="btn" onClick={clearCart}>
          Vaciar carrito
        </button>

        <Link
          to="/checkout"
          className="btn"
          style={{ background: "#22c55e" }}
        >
          Finalizar compra
        </Link>
      </div>
    </main>
  );
}
