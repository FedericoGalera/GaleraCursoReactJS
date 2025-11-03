import { motion } from "framer-motion";

export default function Loader({ text = "Cargando..." }) {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="spinner" />
      <p className="loader-text">{text}</p>
    </motion.div>
  );
}
