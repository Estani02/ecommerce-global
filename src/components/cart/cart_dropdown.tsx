"use client";

import {Minus, Plus, Trash2} from "lucide-react";
import Image from "next/image";
import {useRouter} from "next/navigation";

import {useCartStore} from "@/store/cart.store";

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDropdown({isOpen, onClose}: CartDropdownProps) {
  const router = useRouter();
  const {items, total, removeItem, clearCart, updateQuantity} = useCartStore();

  if (!isOpen) return null;

  return (
    <div className="absolute top-full right-0 z-50 mt-2 w-96">
      <div className="border-weak bg-background rounded-[1.7rem] border p-4 shadow-lg">
        <div className="border-weak mb-4 flex items-center justify-between border-b">
          <h3 className="text-strong text-lg font-semibold">Mi carrito</h3>
          <button className="cursor-pointer" onClick={onClose}>
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div>
            <Image
              alt="Empty cart"
              className="mx-auto mb-4"
              height={100}
              src="/empty-cart.svg"
              width={100}
            />
            <p className="text-muted-foreground text-stroke-weak text-center font-semibold">
              Tu carrito está vacío
            </p>
            <p className="text-weak pb-8 text-center text-sm">
              Descubri las categorias del sitio y eleji los mejores productos
            </p>
            <button
              className="bg-primary text-background hover:bg-primary-foreground flex w-full cursor-pointer items-center justify-center rounded-lg py-2 text-center font-extrabold transition-colors"
              onClick={() => {
                router.push("/");
                onClose();
              }}
            >
              Segui comprando
            </button>
          </div>
        ) : (
          <>
            <div className="max-h-96 space-y-4 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3 rounded-lg border p-2">
                  <Image
                    alt={item.name}
                    className="rounded object-cover"
                    height={50}
                    src={item.image || "/placeholder.svg"}
                    width={50}
                  />

                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{item.name}</h4>
                    <p className="text-muted-foreground text-sm">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center gap-2 text-center">
                    <button
                      className="border-weak flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border p-0 transition-colors hover:bg-white/80"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </button>

                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>

                    <button
                      className="border-weak flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border p-0 transition-colors hover:bg-white/80"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </button>

                    <button
                      className="text-destructive hover:text-destructive flex h-8 w-8 cursor-pointer items-center justify-center p-0 text-red-500"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 border-t pt-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-semibold">Total:</span>
                <span className="text-lg font-bold">${total().toFixed(2)}</span>
              </div>

              <div className="space-y-2">
                <button className="bg-link hover:bg-link-hover text-background w-full cursor-pointer rounded-lg py-2 transition-colors">
                  Proceder al Checkout
                </button>
                <button
                  className="border-link hover:border-link-hover text-link w-full cursor-pointer rounded-lg border py-2 transition-colors"
                  onClick={() => clearCart()}
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
