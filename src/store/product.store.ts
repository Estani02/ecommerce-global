import {create} from "zustand";

interface ProductsState {
  query: string;
  setQuery: (query: string) => void;
  momentaryFilters?: string[];
  setMomentaryFilters: (filters: string[]) => void;
}

export const useProductsStore = create<ProductsState>((set) => ({
  query: "",
  setQuery: (query: string) => set({query}),
  momentaryFilters: [],
  setMomentaryFilters: (filters: string[]) => set({momentaryFilters: filters}),
}));
