export interface Product {
  id: string;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
  fav?: boolean;
  rating: number;
  opiniones_total: number;
  categoria: string;
  marca: string;
}
