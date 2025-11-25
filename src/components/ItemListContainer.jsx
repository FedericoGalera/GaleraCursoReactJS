// src/components/ItemListContainer.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config.js";

import Loader from "./Loader.jsx";
import ItemList from "./ItemList.jsx";

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading"); 

  useEffect(() => {
    setStatus("loading");

    const productsRef = collection(db, "products");

    // Si hay categoría -> filtrar
    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(items);
        setStatus("success");
      })
      .catch((err) => {
        console.error("Error Firestore:", err);
        setStatus("error");
      });
  }, [categoryId]);

  // Loader
  if (status === "loading") {
    return <Loader text="Cargando productos..." />;
  }

  // Error
  if (status === "error") {
    return (
      <main className="container">
        <h1 className="title">Error al cargar productos</h1>
        <p className="muted">Por favor, intenta nuevamente más tarde.</p>
      </main>
    );
  }

  // Sin productos en la categoría
  if (products.length === 0) {
    return (
      <main className="container">
        <h1 className="title">{greeting}</h1>
        <p className="muted">No hay productos disponibles en esta categoría.</p>
      </main>
    );
  }

  // Success
  return (
    <main className="container">
      <h1 className="title">{greeting}</h1>
      <ItemList products={products} />
    </main>
  );
}
