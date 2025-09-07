import {NextResponse} from "next/server";

import {Product} from "@/types/product";
import {readProducts, writeProducts} from "@/lib/products";

export async function GET(req: Request) {
  try {
    const {searchParams} = new URL(req.url);
    const query = searchParams.get("search")?.toLowerCase();

    const products = await readProducts();

    if (!query) {
      return NextResponse.json(products);
    }

    const filtered = products.filter((p: Product) => {
      return p.titulo.toLowerCase().includes(query) || p.marca.toLowerCase().includes(query);
    });

    return NextResponse.json(filtered);
  } catch (_error) {
    return NextResponse.json({message: "Error leyendo productos"}, {status: 500});
  }
}

export async function PATCH(request: Request) {
  try {
    const {id, fav} = await request.json();

    if (typeof id !== "number" || typeof fav !== "boolean") {
      return NextResponse.json({error: "Invalid data"}, {status: 400});
    }
    const products = await readProducts();
    const product = products.find((p: Product) => p.id === id);

    if (!product) {
      return NextResponse.json({error: "Product not found"}, {status: 404});
    }
    product.fav = fav;
    await writeProducts(products);

    return NextResponse.json(product);
  } catch (_error) {
    return NextResponse.json({error: "Error in request"}, {status: 400});
  }
}
