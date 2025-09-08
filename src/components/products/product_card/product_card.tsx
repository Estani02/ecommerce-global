"use client";
import React from "react";
import Image from "next/image";
import {ShoppingCart, Star} from "lucide-react";
import Link from "next/link";
import {KeyedMutator} from "swr";

import styles from "./product_card.module.css";

import {Product} from "@/types/product";

interface ProductCardProps {
  product: Product;
  mutate: KeyedMutator<Product[]>;
}

export default function ProductCard({product, mutate}: ProductCardProps) {
  const handleFavoriteToggle = async () => {
    mutate(
      async (products: Product[] = []) => {
        return products.map((p) => (p.id === product.id ? {...p, fav: !product.fav} : p));
      },
      {optimisticData: undefined, rollbackOnError: true, revalidate: false},
    );

    const response = await fetch(`/api/product`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fav: !product.fav,
        id: product.id,
      }),
    });

    if (!response.ok) {
      console.error("Failed to update favorite status");
    } else {
      mutate();
    }
  };

  return (
    <div className={styles.card}>
      <Link href={`/product/${product.id}`}>
        <div className={styles.image_container}>
          <Image alt="Product Image" height={100} src={product.imagen} width={100} />

          <div className={styles.price}>${product.precio}</div>
        </div>
      </Link>

      <label className={styles.favorite}>
        <span className="hidden">Mark as favorite</span>
        <input checked={product?.fav} type="checkbox" onChange={handleFavoriteToggle} />
        <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z" />
        </svg>
      </label>
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
            ({product.opinionesTotal})
          </div>
        </div>
        <div className={styles.content_product_summary}>
          <p className={styles.product_summary}>{product.descripcion}</p>
        </div>
      </Link>

      <div className={styles.button_container}>
        <button className={`${styles.buy_button} ${styles.button}`}>Comprar ahora</button>
        <button className={`${styles.cart_button} ${styles.button}`}>
          <ShoppingCart />
        </button>
      </div>
    </div>
  );
}
