🛍️ Feyoox Store
E-commerce desarrollado con React + Firebase (Entrega Final – Coderhouse)

⭐ Descripción

Feyoox Store es una Single Page Application completa de e-commerce desarrollada en React, conectada en tiempo real a Firebase Firestore, con manejo global de carrito mediante Context API, navegación dinámica con React Router, validación real de stock y generación de órdenes persistidas en la base de datos.

El proyecto cumple al 100% con los requisitos de la Entrega Final del curso ReactJS (Coderhouse).

🚀 Características principales
🔹 SPA real con React Router

Rutas implementadas:

/ — Catálogo completo

/category/:categoryId — Catálogo filtrado

/item/:itemId — Detalle de producto

/cart — Carrito

/checkout — Checkout y generación de orden

* — Página 404

Sin recargas de navegador.

🔹 Carrito global con Context API

Estado global compartido

Suma dinámica de cantidades

Cálculo de totales

Validación estricta de stock

Persistencia con localStorage

Sincronización entre carrito e interfaz

Eliminación de ítems y vaciado total

🔹 Conexión a Firestore

Lectura de productos desde la colección products

Filtrado por categoría con query + where

Lectura individual con getDoc

Inserción de órdenes en orders

Timestamps generados con serverTimestamp()

🔹 Checkout completamente funcional

Formulario controlado (nombre, email, teléfono)

Validación obligatoria de campos

Loader durante el envío

Generación real de orden

Visualización del ID único generado en Firestore

Limpieza automática del carrito

🔹 ItemCount avanzado

Control propio del estado

Límite inferior: 1

Límite superior: stock disponible

Botones deshabilitados según estado

Integración directa con el carrito

Se oculta luego de agregar el producto

Stock dinámico (stock Firestore − stock ya agregado)

🔹 UX y diseño

Estilos en CSS modularizado

Loader animado

Mensajes condicionales:

“Cargando…”

“Producto no encontrado”

“Carrito vacío”

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


Con tu configuración:

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

4. Ejecutar modo desarrollo
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