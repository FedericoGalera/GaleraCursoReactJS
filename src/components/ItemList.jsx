import Item from "./Item.jsx"; 

export default function ItemList({ products }) {
  return (
    <section className="grid">
      {products.map((p) => (
        <Item
          key={p.id}
          id={p.id}
          title={p.title}
          price={p.price}
          pictureUrl={p.pictureUrl}
        />
      ))}
    </section>
  );
}