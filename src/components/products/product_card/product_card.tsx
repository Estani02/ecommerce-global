"use client";
import React from "react";
import Image from "next/image";
import {Star} from "lucide-react";
import Link from "next/link";
import {KeyedMutator} from "swr";

import BtnFav from "../btn_fav/btn_fav";

import styles from "./product_card.module.css";

import {Product} from "@/types/product";
import BtnCart from "@/components/cart/btn_cart";

interface ProductCardProps {
  product: Product;
  mutate: KeyedMutator<Product[]>;
}

export default function ProductCard({product, mutate}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <Link href={`/product/${product.id}`}>
        <div className={styles.image_container}>
          <Image alt="Product Image" height={100} src={product.imagen} width={100} />

          <div className={styles.price}>${product.precio}</div>
        </div>
      </Link>

      <BtnFav mutate={mutate} product={product} />
      <Link href={`/product/${product.id}`}>
        <div className={styles.content}>
          <div className={styles.brand}>{product.marca}</div>
          <div className={styles.product_name}>{product.titulo}</div>
          <div className={styles.rating}>
            {Array.from({length: 5}).map((_, index) => (
              <Star
                key={index}
                className={`${
                  index < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            ({product?.opiniones_total})
          </div>
        </div>
        <div className={styles.content_product_summary}>
          <p className={styles.product_summary}>{product.descripcion}</p>
        </div>
      </Link>

      <div className={styles.button_container}>
        <button className={`${styles.buy_button} ${styles.button}`}>Comprar ahora</button>
        <BtnCart
          classNameContainer="w-[56px] grid rounded-t-[1.4rem] rounded-b-[0.7rem] place-items-center bg-primary text-white hover:bg-primary-foreground hover:text-white"
          product={product}
          strokeWidth={2.5}
        />
      </div>
    </div>
  );
}
