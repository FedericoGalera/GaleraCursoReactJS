🛍️ Feyoox Store
E-commerce desarrollado con React + Firebase

⭐ Descripción del proyecto

Feyoox Store es una aplicación de e-commerce construida como una Single Page Application utilizando React + Vite, conectada en tiempo real a Firebase Firestore.
La app permite navegar productos por categoría, ver sus detalles, manejar un carrito global con validación estricta de stock y completar una compra generando una orden real en la base de datos.

🚀 Características principales
🔹 SPA real con React Router

Rutas implementadas:

/ — Catálogo general

/category/:categoryId — Catálogo filtrado

/item/:itemId — Detalle de producto

/cart — Carrito de compras

/checkout — Checkout + generación de orden

* — Página 404 (NotFound)

Navegación sin recargas de navegador.

🔹 Carrito global (Context API)

Estado global compartido

Cantidades acumulables

Validación estricta de stock

Sincronización del stock restante

Subtotales y total general

Persistencia automática en localStorage

🔹 Conexión a Firebase Firestore

Colección products para el catálogo

Colección orders para registrar compras

Lectura con: getDocs, getDoc, query, where

Escritura con: addDoc + serverTimestamp()

🔹 Checkout completo

Formulario controlado (name, email, phone)

Validación de campos obligatorios

Loader durante el envío

Generación real de orden

Visualización del ID único generado en Firestore

Limpieza automática del carrito

🔹 Componente ItemCount avanzado

Manejo de estado interno

Límite de cantidad según stock restante

Botones deshabilitados según disponibilidad

Integración directa con el carrito

Ocultamiento del contador tras agregar el producto

🔹 UX/UI

Estilos en CSS personalizado

Loader animado

Mensajes condicionales:

“Cargando…”

“Carrito vacío”

“Producto no encontrado”

“Sin stock”

“Error al cargar productos”

🛠️ Tecnologías utilizadas

React + Vite

React Router DOM

Firebase Firestore

Context API

Framer Motion

React Icons

CSS3

▶️ Cómo ejecutar el proyecto
1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd TU_REPO

2. Instalar dependencias
npm install

3. Configurar Firebase

Crear el archivo:

src/firebase/config.js

y agregar:

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

4. Ejecutar en modo desarrollo
npm run dev

🌐 Deploy (Vercel)
Instalar Vercel:
npm install -g vercel

Generar build:
npm run build

Deployar:
vercel

Configuración recomendada:

Framework: Vite

Output directory: dist/

👤 Autor

Federico Galera
📧 angelrossanigo@gmail.com

💻 GitHub: https://github.com/FedericoGalera
