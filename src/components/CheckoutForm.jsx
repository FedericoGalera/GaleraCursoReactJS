// src/components/CheckoutForm.jsx

import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config.js";

import Loader from "./Loader.jsx";

export default function CheckoutForm() {
  const { cart, clearCart, getTotalPrice } = useCart();

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    const order = {
      buyer,
      items: cart,
      total: getTotalPrice(),
      createdAt: serverTimestamp(),
    };

    try {
      const ref = collection(db, "orders");
      const docRef = await addDoc(ref, order);

      setOrderId(docRef.id);
      clearCart();

    } catch (err) {
      console.error("Error generando orden:", err);
      setError("Hubo un problema al generar la orden. Intenta más tarde.");
    } finally {
      setLoading(false);
    }
  };

  // Loader
  if (loading) return <Loader text="Generando orden..." />;

  // Orden generada
  if (orderId) {
    return (
      <main className="container">
        <h1 className="title">¡Gracias por tu compra!</h1>
        <p className="subtitle">ID de tu orden:</p>
        <h2 className="title" style={{ color: "#a7f3d0" }}>{orderId}</h2>

        <Link to="/" className="btn" style={{ marginTop: "20px" }}>
          Volver al inicio
        </Link>
      </main>
    );
  }

  return (
    <main className="container">
      <h1 className="title">Finalizar compra</h1>

      {error && <p className="error">{error}</p>}

      <form className="checkout-form" onSubmit={handleSubmit}>

        <input
          name="name"
          type="text"
          placeholder="Nombre completo"
          value={buyer.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          value={buyer.email}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          type="tel"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
        />

        <button className="btn" type="submit">
          Confirmar compra
        </button>
      </form>
    </main>
  );
}
