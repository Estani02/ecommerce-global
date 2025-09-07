"use client";
import React from "react";
import Image from "next/image";
import {ShoppingCart, Star} from "lucide-react";
import Link from "next/link";

import styles from "./product_card.module.css";

import {Product} from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({product}: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className={styles.card}>
        <div className={styles.image_container}>
          <Image alt="Product Image" height={100} src={product.imagen} width={100} />

          <div className={styles.price}>${product.precio}</div>
        </div>

        <label className={styles.favorite}>
          <span className="hidden">Mark as favorite</span>
          <input checked type="checkbox" />
          <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z" />
          </svg>
        </label>

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

        <div className={styles.button_container}>
          <button className={`${styles.buy_button} ${styles.button}`}>Buy Now</button>
          <button className={`${styles.cart_button} ${styles.button}`}>
            <ShoppingCart />
          </button>
        </div>
      </div>
    </Link>
  );
}
