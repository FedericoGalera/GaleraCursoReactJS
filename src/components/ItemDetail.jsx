import { useCart } from "../context/CartContext.jsx";

export default function ItemDetail({ product }) {
  const { addToCart, getProductQuantity } = useCart();

  // Cantidad ya agregada de este producto
  const qtyInCart = getProductQuantity(product.id);

  // Stock restante
  const availableStock = product.stock - qtyInCart;

  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addToCart({ ...product, quantity });
    setAdded(true);
  };

  return (
    <section className="detail">
      <div className="detail-thumb">
        <img src={product.pictureUrl} alt={product.title} />
      </div>

      <div className="detail-info">
        <h2 className="detail-title">{product.title}</h2>
        <p className="detail-description">{product.description}</p>
        <p className="detail-price">${product.price}</p>
        <p className="detail-stock">
          Stock disponible: {availableStock}
        </p>

        {!added ? (
          <ItemCount
            stock={availableStock}
            initial={1}
            onAdd={handleAdd}
          />
        ) : (
          <Link to="/cart" className="btn">Ir al carrito</Link>
        )}
      </div>
    </section>
  );
}