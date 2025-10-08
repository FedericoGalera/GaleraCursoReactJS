import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./index.css";

export default function App() {
  return (
    <>
      <NavBar brand="Feyoox's Store" />   {/* ← UNA sola */}
      <ItemListContainer greeting="Bienvenido/a a Feyoox's Store" />
    </>
  );
}