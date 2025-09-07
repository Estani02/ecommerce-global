"use client";
import React from "react";
import Image from "next/image";
import {ShoppingCart} from "lucide-react";
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
            <svg
              className="svg four-star-svg"
              viewBox="0 0 99.498 16.286"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                fill="#fc0"
                id="star-svgrepo-com"
                transform="translate(-0.001 -1.047)"
              />
              <path
                d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                data-name="star-svgrepo-com"
                fill="#fc0"
                id="star-svgrepo-com-2"
                transform="translate(20.607 -1.047)"
              />
              <path
                d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                data-name="star-svgrepo-com"
                fill="#fc0"
                id="star-svgrepo-com-3"
                transform="translate(41.215 -1.047)"
              />
              <path
                d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                data-name="star-svgrepo-com"
                fill="#fc0"
                id="star-svgrepo-com-4"
                transform="translate(61.823 -1.047)"
              />
              <path
                d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                data-name="star-svgrepo-com"
                fill="#e9e9e9"
                id="star-svgrepo-com-5"
                transform="translate(82.431 -1.047)"
              />
            </svg>
            (29,062)
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
