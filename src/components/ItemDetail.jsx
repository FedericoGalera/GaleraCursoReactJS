import { motion } from "framer-motion";
import { useCart } from "../context/CartContext.jsx";
import ItemCount from "./ItemCount.jsx";
import { useState } from "react";

export default function ItemDetail({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addToCart({ ...product, quantity });
    setAdded(true);
  };

  if (!product) return null;

  return (
    <motion.section
      className="detail"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="detail-thumb">
        <img src={product.pictureUrl || "/imgs/placeholder.png"} alt={product.title} />
      </div>

      <div className="detail-info">
        <h2 className="detail-title">{product.title}</h2>
        <p className="detail-description">{product.description}</p>
        <p className="detail-price">${product.price}</p>
        <p className="detail-stock">Stock disponible: {product.stock}</p>

        {!added ? (
          <ItemCount stock={product.stock} onAdd={handleAdd} />
        ) : (
          <p style={{ color: "#a7f3d0", marginTop: "12px" }}>
            Producto agregado al carrito ✔
          </p>
        )}
      </div>
    </motion.section>
  );
}
