import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import Loader from "./Loader.jsx";
import ItemDetail from "./ItemDetail.jsx";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    let alive = true;
    setStatus("loading");

    getProductById(itemId)
      .then((res) => {
        if (!alive) return;
        setProduct(res);
        setStatus("success");
      })
      .catch(() => {
        if (!alive) return;
        setStatus("error");
      });

    return () => {
      alive = false;
    };
  }, [itemId]);

  return (
    <main className="container">
      {status === "loading" && <Loader text="Cargando producto..." />}
      {status === "error" && <p className="error">Error al cargar el producto.</p>}
      {status === "success" && product && <ItemDetail product={product} />}
    </main>
  );
}
