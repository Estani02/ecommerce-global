import {NextRequest, NextResponse} from "next/server";

import {readProducts, writeProducts} from "@/lib/products";
import {Product} from "@/types/product";

export async function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({error: "ID is required"}, {status: 400});
  }

  const products = await readProducts();
  const product = products.find((p: Product) => String(p.id) === String(id));

  if (!product) {
    return NextResponse.json({error: "Product not found"}, {status: 404});
  }

  return NextResponse.json(product);
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const {id, ...updates} = body;

    if (!id) {
      return NextResponse.json({error: "ID is required"}, {status: 400});
    }

    const products = await readProducts();
    const product = products.find((p: Product) => String(p.id) === String(id));

    if (!product) {
      return NextResponse.json({error: "Product not found"}, {status: 404});
    }

    Object.assign(product, updates);
    await writeProducts(products);

    return NextResponse.json(product);
  } catch (_error) {
    return NextResponse.json({error: "Error in request"}, {status: 400});
  }
}
