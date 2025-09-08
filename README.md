
---

# 🛍️ Ecommerce Global

## 🚀 Cómo correr el proyecto

1. Instalar dependencias:

   ```bash
   pnpm install
   ```
2. Levantar el servidor de desarrollo:

   ```bash
   pnpm dev
   ```
3. El proyecto estará disponible en:
   [http://localhost:3000](http://localhost:3000)

🔗 Deploy: [ecommerce-global.vercel.app](https://ecommerce-global.vercel.app)

---

## 📝 Descripción del proyecto

Aplicación de listado de productos desarrollada con **Next.js** que combina distintas tecnologías modernas de frontend:

* **Estilos**: uso combinado de **CSS Modules** y **TailwindCSS**.
* **Estado global**: gestionado con **Zustand** (para carrito y query de búsqueda).
* **Manejo de peticiones HTTP**: implementado con **SWR** y hooks personalizados.
* **Tipado**: interfaces definidas en cada componente que recibe props, además de una interfaz general `Product` para estandarizar la data.

---

## ⚙️ API simulada

El enunciado pedía simular una base de datos con un JSON, pero se aprovechó la potencia de Next.js para implementar una API interna simple:

* **GET `/api/products?search=query`** → filtra productos por nombre o marca.
* **PATCH `/api/products`** → actualiza el estado de un producto (ejemplo: marcar o desmarcar como favorito). El `id` se envía en el body.

---

## 📦 Cliente

* Las peticiones a la API se manejan con **SWR**.
* Se crearon **hooks personalizados** para abstraer el consumo de datos y facilitar la reutilización.
* El estado de la búsqueda y del carrito se controla con **Zustand**.

---
