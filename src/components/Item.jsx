// src/components/Item.jsx
import { Link } from "react-router-dom";

export default function Item({ id, title, price, pictureUrl }) {
  return (
    <article className="card">
      <div className="card-thumb">
        <img src={pictureUrl || "/imgs/placeholder.png"} alt={title} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">${price}</p>
        <Link to={`/item/${id}`} className="btn">Ver detalle</Link>
      </div>
    </article>
  );
}

