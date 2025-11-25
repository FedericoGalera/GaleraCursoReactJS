🛍️ FEYOOX'S STORE — E-commerce con React + Firebase

Proyecto desarrollado en React como entrega final del curso ReactJS – Coderhouse.
Aplicación completa de e-commerce con:

SPA real mediante React Router

Carrito global con Context API

Consumo de Firestore para productos

Checkout con generación de órdenes en la base de datos

Validaciones de stock

Navegación por categorías

Componentes desacoplados y reutilizables

🚀 Descripción general

FeyooX's Store es una Single Page Application de e-commerce que permite:

Navegar productos por categorías

Ver el detalle de cada producto

Seleccionar cantidad con control de stock real

Agregar ítems al carrito con validación global

Visualizar el carrito y totales

Finalizar una compra mediante un formulario

Generar una orden real en Firestore

Recibir el ID único de la compra

Toda la información de productos y órdenes se gestiona desde Firebase.

🧱 Funcionalidades principales
🔗 Routing dinámico (SPA)

/ → Catálogo completo

/category/:categoryId → Catálogo filtrado

/item/:itemId → Detalle de producto

/cart → Carrito

/checkout → Proceso de compra

* → Página 404

Sin recargas de navegador.

🛒 Carrito con Context API

Estado global del carrito

Suma de cantidades

Validación estricta de stock

Persistencia opcional con localStorage

Subtotales y total general

📦 Componente ItemCount avanzado

Estado interno

Límite inferior = 1

Límite superior = stock disponible

Botones deshabilitados según estado

Envía cantidad final al carrito

Se oculta luego de agregar el producto

🗄️ Conexión a Firebase Firestore

Colección products

Lectura asincrónica con getDocs, getDoc y query

Filtrado por categoría mediante where

Colección orders

Inserción de órdenes mediante addDoc y serverTimestamp

📝 Checkout completo

Formulario controlado (name, email, phone)

Validaciones básicas (required)

Loader durante el envío

Generación de documento en Firestore

Visualización del ID único de orden

Limpieza automática del carrito

🎨 Interfaz y UX

Estilos personalizados en CSS

Diseño limpio y responsive

Loader animado

Mensajes condicionales:

“Cargando…”

“Producto no encontrado”

“Carrito vacío”

“Sin stock”

“Error al cargar productos”

⚙️ Tecnologías utilizadas

React + Vite

React Router DOM

Firebase / Firestore

Context API

Framer Motion (animaciones)

React Icons

CSS3

📂 Estructura del proyecto
src/
├─ components/
│  ├─ NavBar.jsx
│  ├─ CartWidget.jsx
│  ├─ ItemListContainer.jsx
│  ├─ ItemList.jsx
│  ├─ Item.jsx
│  ├─ ItemDetailContainer.jsx
│  ├─ ItemDetail.jsx
│  ├─ ItemCount.jsx
│  ├─ Cart.jsx
│  ├─ CheckoutForm.jsx
│  └─ NotFound.jsx
│
├─ context/
│  └─ CartContext.jsx
│
├─ data/
│  └─ product.js
│
├─ firebase/
│  └─ config.js
│
├─ App.css
├─ App.jsx
├─ main.jsx
├─ index.css
│
public/
├─ logo.png
├─ fondo.png
└─ imgs/
   ├─ nb-acer-01.png
   ├─ nb-lenovo-01.png
   ├─ mous-logi-01.png
   └─ ...

▶️ Cómo ejecutar el proyecto
1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO

2. Instalar dependencias
npm install

3. Configurar Firebase

Crear un archivo en:

src/firebase/config.js


Con el contenido proporcionado por Firebase:

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

4. Ejecutar en modo desarrollo
npm run dev


Abrir la URL que muestra la terminal.

📦 Deploy (Vercel)

Instalar Vercel:

npm install -g vercel


Generar build:

npm run build


Deploy:

vercel


Configuración recomendada:

Framework: Vite

Output directory: dist/

🧩 Autor

Federico Galera
📧 angelrossanigo@gmail.com

💼 GitHub: https://github.com/FedericoGalera