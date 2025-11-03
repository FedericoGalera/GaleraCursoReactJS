import { useState } from "react";

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    if (stock > 0) onAdd(count);
  };

  return (
    <div className="itemcount">
      <div className="controls">
        <button onClick={decrease} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button onClick={increase} disabled={count >= stock}>+</button>
      </div>
      <button className="btn" onClick={handleAdd} disabled={stock === 0}>
        Agregar {count > 1 ? `(${count})` : ""}
      </button>
    </div>
  );
}
