// src/components/ItemDetailContainer.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config.js";

import Loader from "./Loader.jsx";
import ItemDetail from "./ItemDetail.jsx";

export default function ItemDetailContainer() {
  const { itemId } = useParams();

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading"); 

  useEffect(() => {
    setStatus("loading");

    const ref = doc(db, "products", itemId);

    getDoc(ref)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
          setStatus("success");
        } else {
          setProduct(null);
          setStatus("success");
        }
      })
      .catch((err) => {
        console.error("Error Firestore:", err);
        setStatus("error");
      });
  }, [itemId]);

  // Loader
  if (status === "loading") return <Loader text="Cargando producto..." />;

  // Error
  if (status === "error") {
    return (
      <main className="container">
        <h1 className="title">Error al cargar este producto</h1>
        <p className="muted">Por favor, intenta nuevamente más tarde.</p>
      </main>
    );
  }

  // Producto no encontrado
  if (!product) {
    return (
      <main className="container">
        <h1 className="title">Producto no encontrado</h1>
        <p className="muted">El producto que buscas no existe o fue eliminado.</p>
      </main>
    );
  }

  // Success
  return (
    <main className="container">
      <ItemDetail product={product} />
    </main>
  );
}
