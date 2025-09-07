export interface Product {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
  fav?: boolean;
  rating: number;
  opinionesTotal: number;
  categoria: string;
  marca: string;
}
