# 🛍️ FEYOOX'S STORE

Proyecto desarrollado en React para la Diplomatura de Desarrollo Frontend (Coderhouse).  
Entrega correspondiente a la **Preentrega Nº2 – Navega las Rutas**.

---

## 🚀 Descripción

Aplicación e-commerce que implementa un sistema de navegación completo mediante **React Router** y simula la carga de productos utilizando promesas asíncronas.  
Permite explorar el catálogo por categorías, ver el detalle de cada producto y gestionar un carrito de compras utilizando **Context API**.

---

## 🧱 Funcionalidades principales

- **Routing dinámico:**  
  - `/` → Página principal (catálogo completo).  
  - `/category/:categoryId` → Filtrado por categoría.  
  - `/item/:itemId` → Detalle individual de producto.  
  - `/cart` → Vista del carrito de compras.  
  - `*` → Página 404 (ruta no encontrada).

- **Context API:** manejo global del carrito.  
- **Promesas simuladas:** carga de productos desde `src/data/products.js`.  
- **Librería externa:** animaciones con [Framer Motion](https://www.framer.com/motion/).  
- **Componente reutilizable:** `ItemCount` (opcional, futuro uso).  
- **Diseño responsive y moderno.**

---

## ⚙️ Tecnologías utilizadas

- React + Vite  
- React Router DOM  
- React Icons  
- Framer Motion  
- Context API  
- CSS3

---

## 📂 Estructura del proyecto
src/
├─ components/
│ ├─ NavBar.jsx
│ ├─ CartWidget.jsx
│ ├─ ItemListContainer.jsx
│ ├─ ItemList.jsx
│ ├─ Item.jsx
│ ├─ ItemDetailContainer.jsx
│ ├─ ItemDetail.jsx
│ ├─ Cart.jsx
│ └─ NotFound.jsx
├─ context/
│ └─ CartContext.jsx
├─ data/
│ └─ products.js
├─ App.jsx
├─ index.css
├─ main.jsx
public/
├─ logo.png
├─ fondo.png
└─ imgs/
├─ nb-acer-01.png
├─ nb-lenovo-01.png
└─ ...


---

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   cd TU_REPOSITORIO


Instalar dependencias:

npm install


Iniciar el entorno de desarrollo:

npm run dev


Abrir la URL que muestra la terminal

🧩 Autor

Federico Galera
📧 angelrossanigo@gmail.com

💼 GitHub