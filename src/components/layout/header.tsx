"use client";
import Link from "next/link";
import {ShoppingCart} from "lucide-react";
import {useEffect, useRef, useState} from "react";

import CartDropdown from "../cart/cart_dropdown";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="text-stroke bg-background/90 supports-[backdrop-filter]:bg-background/60 border-weak fixed z-40 flex h-[80px] w-full items-center justify-between border-b px-8 backdrop-blur">
      <Link href="/">
        <p>Global Commerce</p>
      </Link>
      <div ref={cartRef} className="relative">
        <button
          className="border-weak text-weak hover:bg-stroke relative flex cursor-pointer items-center justify-center rounded-lg border-2 border-solid px-2.5 py-2 transition-colors"
          type="button"
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <ShoppingCart className="text-current transition-transform hover:scale-110" size={18} />
        </button>
        <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </header>
  );
}
