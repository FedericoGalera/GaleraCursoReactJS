import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart.jsx";
import "./index.css";

export default function App() {
  return (
    <>
      <NavBar brand="Feyoox's Store" />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido/a a Feyoox's Store" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrando por categoría…" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
