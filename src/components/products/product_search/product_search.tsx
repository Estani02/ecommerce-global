"use client";
import {Search} from "lucide-react";
import {useDebouncedCallback} from "use-debounce";

import style from "./product_search.module.css";

import {useProductsStore} from "@/store/product.store";

export default function ProductSearch() {
  const {setQuery} = useProductsStore();

  const handleSearch = useDebouncedCallback((value: string) => {
    setQuery(value);
  }, 500);

  return (
    <div className="relative box-border flex w-full max-w-md items-center">
      <input
        className={style.search_input}
        placeholder="Buscar productos por nombre o marca"
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button className={style.search_btn} type="button">
        <Search size={20} />
      </button>
    </div>
  );
}
