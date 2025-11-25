// src/components/ItemCount.jsx

import { useState } from "react";

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleSub = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <div className="count-controls">
        <button onClick={handleSub} disabled={count <= 1}>
          -
        </button>

        <span>{count}</span>

        <button onClick={handleAdd} disabled={count >= stock}>
          +
        </button>
      </div>

      <button
        className="btn"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>
  );
}
