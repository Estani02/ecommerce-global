"use client";
import {ShoppingCart} from "lucide-react";
import toast from "react-hot-toast";
import {type ClassValue} from "clsx";

import {useCartStore} from "@/store/cart.store";
import {Product} from "@/types/product";
import {cn} from "@/lib/utils";

interface BtnCartProps {
  product: Product;
  classNameContainer?: ClassValue;
  sizeIcon?: number;
  text?: string;
  strokeWidth?: number;
}

export default function BtnCart({
  product,
  classNameContainer,
  sizeIcon,
  text,
  strokeWidth,
}: BtnCartProps) {
  const {addItem} = useCartStore();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.titulo,
      price: product.precio,
      quantity: 1,
      image: product.imagen,
    });
    toast.success("Producto agregado al carrito");
  };

  return (
    <button
      className={cn(
        "hover:border-primary-foreground hover:text-primary-foreground text-primary border-primary flex cursor-pointer items-center justify-center gap-2 rounded-md border border-solid py-2 font-[900] transition-colors",
        classNameContainer,
      )}
      type="button"
      onClick={handleAddToCart}
    >
      {text && <span>{text}</span>}
      <ShoppingCart
        className="inline-block"
        size={sizeIcon ? sizeIcon : 16}
        strokeWidth={strokeWidth}
      />
    </button>
  );
}
