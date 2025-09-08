/* eslint-disable react/jsx-no-useless-fragment */
"use client";

import Image from "next/image";

import ProductCard from "../product_card/product_card";
import ProductSearch from "../product_search/product_search";

import styles from "./product_list.module.css";

import {useProductsStore} from "@/store/product.store";
import {useProducts} from "@/hooks/useProducts";

export default function ProductList() {
  const {query} = useProductsStore();
  const {products, isLoading, mutate} = useProducts(query);

  return (
    <div className="grid w-full max-w-[1300px] grid-cols-1 place-items-center justify-between gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      <div className="col-span-full mb-4 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ProductSearch />
        {isLoading ? (
          <div className={`${styles.skeleton_block} pulsate`} />
        ) : (
          <p className="whitespace-nowrap">{products?.length} productos encontrados</p>
        )}
      </div>
      {isLoading ? (
        <>
          {Array.from({length: 5}).map((_, index) => (
            <div key={index} className={`${styles.skeleton_card} pulsate`} />
          ))}
        </>
      ) : products?.length === 0 ? (
        <div className="col-span-full flex w-full flex-col items-center justify-center text-center">
          <Image
            alt="404 Not Found"
            className="size-[246px]"
            height={56}
            src="/404-error.svg"
            width={56}
          />
          <div className="text-sm md:text-base">
            <h2 className="mb-4 text-3xl font-bold">No se encontraron productos</h2>
            <p>No hay productos que coincidan con tu búsqueda.</p>
            <p>
              Intenta ajustar tus filtros o verifica que el nombre que estás buscando sea correcto.
            </p>
          </div>
        </div>
      ) : (
        <>
          {products?.map((product) => (
            <ProductCard key={product.id} mutate={mutate} product={product} />
          ))}
        </>
      )}
    </div>
  );
}
