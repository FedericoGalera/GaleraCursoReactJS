// src/components/ItemListContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../data/products";

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams(); // undefined en “/”
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  useEffect(() => {
    let alive = true;
    setStatus("loading");
    getProducts(categoryId)
      .then((list) => {
        if (!alive) return;
        setProducts(list);
        setStatus("success");
      })
      .catch(() => {
        if (!alive) return;
        setStatus("error");
      });
    return () => { alive = false; };
  }, [categoryId]); // dependencia en URL

  return (
    <main className="container">
      <h1 className="title">{greeting}</h1>

      {categoryId && (
        <p className="subtitle">Categoría seleccionada → <strong>{categoryId}</strong></p>
      )}

      {status === "loading" && <p className="muted">Cargando productos…</p>}
      {status === "error" && <p className="error">No se pudo cargar el catálogo.</p>}
      {status === "success" && <ItemList products={products} />}

      {!categoryId && status === "success" && products.length === 0 && (
        <p className="muted">No hay productos para mostrar.</p>
      )}
    </main>
  );
}
