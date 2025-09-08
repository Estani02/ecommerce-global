"use client";
import {KeyedMutator} from "swr";
import {ClassNameValue} from "tailwind-merge";
import {useRouter} from "next/navigation";
import {useState} from "react";

import styles from "./btn_fav.module.css";

import {Product} from "@/types/product";
import {cn} from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  mutate?: KeyedMutator<Product[]>;
  classNameContainer?: ClassNameValue;
  refresh?: () => void;
}

export default function BtnFav({product, mutate, classNameContainer, refresh}: ProductCardProps) {
  const router = useRouter();
  const [optimisticFav, setOptimisticFav] = useState<boolean | undefined>(undefined);

  const handleFavoriteToggle = async () => {
    if (mutate) {
      mutate(
        async (products: Product[] = []) => {
          return products.map((p) => (p.id === product.id ? {...p, fav: !product.fav} : p));
        },
        {optimisticData: undefined, rollbackOnError: true, revalidate: false},
      );
    } else {
      setOptimisticFav((prev) => (prev === undefined ? !product.fav : !prev));
    }

    const response = await fetch(`/api/product`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fav: !(optimisticFav ?? product.fav),
        id: product.id,
      }),
    });

    if (!response.ok) {
      console.error("Failed to update favorite status");
      if (!mutate) setOptimisticFav(undefined);
    } else {
      if (mutate) {
        mutate();
      }
      if (refresh) {
        refresh();
      } else {
        router.refresh();
      }
    }
  };

  const isFav = optimisticFav !== undefined ? optimisticFav : product?.fav;

  return (
    <label className={cn(styles.favorite, classNameContainer)}>
      <span className="hidden">Mark as favorite</span>
      <input checked={isFav} type="checkbox" onChange={handleFavoriteToggle} />
      <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z" />
      </svg>
    </label>
  );
}
