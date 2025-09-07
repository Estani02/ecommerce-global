export const API_ENDPOINTS = {
  products: "/api/products",
  product: (id: string | number) => `/api/products?id=${id}`,
  search: (query: string) => `/api/products?search=${query}`,
  cart: "/api/cart",
};
