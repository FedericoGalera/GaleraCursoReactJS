// Recibe un string por props 
export default function ItemListContainer({ greeting }) {
  return (
    <main className="container">
      <h1 className="title">{greeting}</h1>
      {/* Aquí en el futuro va el catálogo de productos */}
      <p className="subtitle">Próximamente: listado de productos…</p>
    </main>
  );
}