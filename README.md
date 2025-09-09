# 📦 Ecommerce Global

## 🚀 Instrucciones para correr el proyecto

1. Instalar dependencias:

   ```bash
   pnpm install
   ```
2. Levantar el entorno de desarrollo:

   ```bash
   pnpm dev
   ```

El proyecto quedará disponible en: **[http://localhost:3000](http://localhost:3000)**
Deploy en producción: **[ecommerce-global.vercel.app](https://ecommerce-global.vercel.app)**

---

## 🛠️ Tecnologías utilizadas

* **Next.js** → Framework principal del frontend y la API.
* **TailwindCSS + CSS Modules** → Para los estilos, combinando rapidez con modularidad.
* **Zustand** → Manejo de estado global (queries activas, carrito de compras, etc.).
* **SWR** → Gestión de datos y cacheo de peticiones HTTP.
* **Supabase** → Base de datos en la nube con soporte para Postgres.
* **Next.js API Routes** → Actúan como intermediario entre el cliente y Supabase (se exponen endpoints controlados).

---

## ⚙️ Funcionalidades de la API

* `GET /api/products?search={query}` → Busca productos filtrando por **nombre** o **marca**.
* `PATCH /api/products` → Permite marcar o desmarcar un producto como favorito, recibiendo el `id` en el body.

> ✅ Anteriormente se utilizaba un archivo JSON como base de datos simulada. Actualmente, toda la persistencia de datos se maneja con **Supabase**, pero la API de Next.js se mantiene como capa intermedia para desacoplar el cliente de la base de datos y facilitar futuras integraciones.

---

## 🧩 Organización del código

* **Hooks personalizados** → Crean una abstracción sobre SWR para simplificar el uso de los endpoints.
* **Zustand** → Centraliza el manejo de queries y el carrito de compras.
* **Interfaces TypeScript** → Definidas para props de componentes y modelos de datos (`Product`).

---

👉 Con esta arquitectura, el proyecto mantiene separación de responsabilidades:

* **Cliente (Next.js + SWR + Zustand)** → Manejo de UI, cache y estado.
* **API (Next.js)** → Encargada de exponer endpoints claros y seguros.
* **Base de datos (Supabase)** → Persistencia real de los productos y su estado.

---