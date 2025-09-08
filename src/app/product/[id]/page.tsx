import {ArrowLeft, RefreshCcw, Star} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {Product} from "@/types/product";
import BtnFav from "@/components/products/btn_fav/btn_fav";
import {API_URL} from "@/lib/const";
import BtnCart from "@/components/cart/btn_cart";

export default async function ProductByIdPage({params}: {params: {id: string}}) {
  const getItem = async (id: string) => {
    const res = await fetch(`${API_URL}/product?id=${id}`, {
      cache: "no-store",
    });

    return res.json();
  };

  const product: Product = await getItem(params.id);

  return (
    <main className="flex min-h-screen w-full gap-16 p-4 pt-28 md:p-24 md:pt-28 lg:items-center">
      <section className="mx-auto flex h-fit w-full max-w-[1300px] flex-col gap-4 rounded-2xl bg-white p-8 shadow-lg lg:h-auto">
        <div className="relative flex w-full items-center justify-between">
          <Link
            className="text-link hover:text-link-hover flex items-center gap-2 font-medium"
            href="/"
          >
            <ArrowLeft size={16} />
            <span>Volver al catálogo</span>
          </Link>
          <BtnFav classNameContainer="!size-9 !top-0" product={product} />
        </div>
        <div className="divide-background flex w-full flex-col gap-8 divide-x divide-solid lg:flex-row">
          <div className="flex-1 lg:h-[500px]">
            <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between lg:hidden">
              <h1 className="text-strong text-2xl font-bold">
                {product?.titulo ?? "Producto no encontrado"}
              </h1>
              <div>
                <div className="flex items-center gap-2">
                  {Array.from({length: 5}).map((_, index) => (
                    <Star
                      key={index}
                      className={`${
                        index < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-weak mt-1 text-sm">
                  Calificación {product?.rating} de 5. {product?.opinionesTotal} opiniones
                </p>
              </div>
            </div>
            <div className="relative aspect-square h-full max-h-[300px] w-full overflow-hidden">
              {product?.imagen ? (
                <Image
                  alt={product.titulo}
                  className="h-full w-full object-contain"
                  height={200}
                  src={product.imagen}
                  width={200}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-md bg-gray-100 p-12">
                  <Image
                    alt="Imagen no disponible"
                    className="h-full w-full object-contain"
                    height={200}
                    src="/no-image.svg"
                    width={200}
                  />
                </div>
              )}
            </div>
            <div className="mt-6 hidden lg:block">
              <h4 className="text-stroke-weak text-2xl font-semibold">Descripción</h4>
              {product?.descripcion ? (
                <p className="text-weak mt-2 text-lg">{product.descripcion}</p>
              ) : (
                <p className="mt-2 text-lg text-gray-400 italic">Sin descripción</p>
              )}
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-4 lg:h-[500px]">
            <h1 className="text-strong hidden text-4xl font-bold lg:block">
              {product?.titulo ?? "Producto no encontrado"}
            </h1>
            <div className="hidden lg:block">
              <div className="flex items-center gap-2">
                {Array.from({length: 5}).map((_, index) => (
                  <Star
                    key={index}
                    className={`${
                      index < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                    size={16}
                  />
                ))}
              </div>
              <p className="text-weak mt-1 text-sm">
                Calificación {product?.rating} de 5. {product?.opinionesTotal} opiniones
              </p>
            </div>
            <span className="text-strong text-4xl">${product?.precio}</span>
            <div className="flex flex-col">
              <button className="text-link hover:text-link-hover cursor-pointer">
                Ver los medios de pago
              </button>
              <span className="text-green font-semibold">Llega gratis hoy</span>
            </div>
            <span className="text-link hover:text-link-hover cursor-pointer">
              Más formas de entrega
            </span>
            <div className="flex flex-col">
              <div className="text-weak flex items-center gap-2 text-sm">
                <RefreshCcw size={16} />
                <span>
                  <span className="text-link hover:text-link-hover cursor-pointer">
                    Devolución gratis.
                  </span>{" "}
                  Tenés 30 días desde que lo recibís.
                </span>
              </div>
            </div>
            <div className="mt-6 block lg:hidden">
              <h4 className="text-stroke-weak text-2xl font-semibold">Descripción</h4>
              {product?.descripcion ? (
                <p className="text-weak mt-2 text-lg">{product.descripcion}</p>
              ) : (
                <p className="mt-2 text-lg text-gray-400 italic">Sin descripción</p>
              )}
            </div>
            <div className="flex w-full flex-col gap-1.5 text-white">
              <button className="hover:bg-primary-foreground bg-primary w-full cursor-pointer rounded-md py-2 font-[900] transition-colors">
                Comprar ahora
              </button>
              <BtnCart product={product} sizeIcon={20} text="Agregar al carrito" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
