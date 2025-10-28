import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const CATEGORIES = [
  { id: "notebooks", label: "Notebooks" },
  { id: "perifericos", label: "Periféricos" },
  { id: "componentes", label: "Componentes" },
];

export default function NavBar({ brand = "Feyoox's Store" }) {
  return (
    <header className="navbar">
      <div className="nav-inner">
<Link className="brand" to="/" aria-label={brand}>
  <img
    src="/logo.png"
    alt={brand}
    className="brand-logo"
  />
  <span className="brand-text">{brand}</span>
</Link>

        <nav className="nav-links">
          {CATEGORIES.map((c) => (
            <NavLink
              key={c.id}
              to={`/category/${c.id}`}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              {c.label}
            </NavLink>
          ))}
        </nav>

        <CartWidget />
      </div>
    </header>
  );
}