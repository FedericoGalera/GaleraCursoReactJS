// src/data/products.js

// Categorías válidas (alineadas al NavBar)
export const CATEGORIES = ["notebooks", "perifericos", "componentes"];

// Catálogo mockeado
export const PRODUCTS = [
  {
    id: "nb-acer-01",
    title: "Notebook Acer Nitro V",
    description: "Core i7-13620H, 16GB, RTX 4060, 1TB SSD, 15.6” 144Hz",
    price: 1799,
    stock: 8,
    category: "notebooks",
    pictureUrl: "/imgs/nb-acer-01.png",
  },
  {
    id: "nb-lenovo-01",
    title: "Lenovo IdeaPad Gaming 3",
    description: "Ryzen 7 6800H, 16GB, RTX 3050, 512GB SSD, 15.6” 120Hz",
    price: 1299,
    stock: 12,
    category: "notebooks",
    pictureUrl: "/imgs/nb-lenovo-01.png",
  },
  {
    id: "mous-logi-01",
    title: "Mouse Logitech G502 X",
    description: "Sensor 25K, 13 botones programables",
    price: 79,
    stock: 25,
    category: "perifericos",
    pictureUrl: "/imgs/mous-logi-01.png",
  },
  {
    id: "kbd-redr-01",
    title: "Teclado Redragon Kumara K552",
    description: "Mecánico TKL, Outemu Blue, español",
    price: 49,
    stock: 30,
    category: "perifericos",
    pictureUrl: "/imgs/kbd-redr-01.png",
  },
  {
    id: "gpu-rtx-4070",
    title: "GeForce RTX 4070 12GB",
    description: "DLSS 3.5, Ray Tracing",
    price: 549,
    stock: 6,
    category: "componentes",
    pictureUrl: "/imgs/gpu-rtx-4070.png",
  },
  {
    id: "ssd-1tb-01",
    title: "SSD NVMe 1TB Gen4",
    description: "Lectura 7000 MB/s, escritura 6000 MB/s",
    price: 99,
    stock: 20,
    category: "componentes",
    pictureUrl: "/imgs/ssd-1tb-01.png",
  },
];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export async function getProducts(categoryId) {
  await delay(500);
  if (!categoryId) return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === categoryId);
}
export async function getProductById(id) {
  await delay(400);
  return PRODUCTS.find((p) => p.id === id) ?? null;
}
export async function getProductsByCategory(categoryId) {
  return getProducts(categoryId);
}
