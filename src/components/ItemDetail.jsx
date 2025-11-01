import { motion } from "framer-motion";

export default function ItemDetail({ product }) {
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
        <button className="btn">Agregar al carrito</button>
      </div>
    </motion.section>
  );
}
