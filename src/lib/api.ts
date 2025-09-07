export const API_ENDPOINTS = {
  products: "/api/products",
  product: (id: string | number) => `/api/products?id=${id}`,
  cart: "/api/cart",
};
