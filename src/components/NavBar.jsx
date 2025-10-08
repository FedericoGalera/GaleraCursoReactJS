import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Brand / Logo */}
        <a className="brand" href="/">
          Feyoox's Store
        </a>

        {/* Enlaces de navegación (categorías) */}
        <nav className="nav-links">
          <a href="#" className="nav-link">Inicio</a>
          <a href="#" className="nav-link">Productos</a>
          <a href="#" className="nav-link">Contacto</a>
        </nav>

        {/* CartWidget se renderiza dentro de NavBar (requisito) */}
        <CartWidget />
      </div>
    </header>
  );
}