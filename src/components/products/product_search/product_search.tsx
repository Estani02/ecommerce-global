"use client";
import {Search} from "lucide-react";

import style from "./product_search.module.css";

export default function ProductSearch() {
  return (
    <div className="relative box-border flex w-full max-w-md items-center">
      <input
        className={style.search_input}
        placeholder="Buscar productos por nombre o marca"
        type="text"
      />
      <button className={style.search_btn} type="button">
        <Search size={20} />
      </button>
    </div>
  );
}
