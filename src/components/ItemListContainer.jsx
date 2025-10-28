import { useParams } from "react-router-dom";

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();

  return (
    <main className="container">
      <h1 className="title">{greeting}</h1>
      {categoryId ? (
        <p className="subtitle">
          Categoría seleccionada → <strong>{categoryId}</strong>
        </p>
      ) : (
        <p className="subtitle">
          Próximamente: listado y filtros por categoría.
        </p>
      )}
    </main>
  );
}