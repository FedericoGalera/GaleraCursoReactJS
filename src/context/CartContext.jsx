// src/context/CartContext.jsx

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Persistencia en localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Obtener cantidad actual de un producto en el carrito
  const getProductQuantity = (id) => {
    const item = cart.find((p) => p.id === id);
    return item ? item.quantity : 0;
  };

  // Agregar al carrito con validación real de stock
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      const qtyInCart = existing ? existing.quantity : 0;
      const totalRequested = qtyInCart + product.quantity;

      // Validación estricta contra el stock total
      if (totalRequested > product.stock) {
        alert("No hay stock suficiente.");
        return prevCart;
      }

      // Si ya existe → actualizar cantidad
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: totalRequested }
            : item
        );
      }

      // Nuevo producto al carrito
      return [...prevCart, product];
    });
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Cantidad total de unidades en carrito
  const getTotalQuantity = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  // Precio total
  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        getTotalQuantity,
        getTotalPrice,
        getProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}