/* eslint-disable react/jsx-no-useless-fragment */
"use client";
import ProductCard from "../product_card/product_card";

import styles from "./product_list.module.css";

import {useProducts} from "@/hooks/useProducts";

export default function ProductList() {
  const {products, isLoading} = useProducts();

  return (
    <div className="grid w-full max-w-[1300px] grid-cols-1 justify-between gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {isLoading ? (
        <>
          {Array.from({length: 5}).map((_, index) => (
            <div key={index} className={`${styles.skeleton_card} pulsate`} />
          ))}
        </>
      ) : (
        <>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      )}
    </div>
  );
}
