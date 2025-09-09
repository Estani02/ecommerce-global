import {NextRequest, NextResponse} from "next/server";

import {createClient} from "@/supabase/server";
import {Product} from "@/types/product";

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const {searchParams} = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({error: "ID is required"}, {status: 400});
  }

  const {data: products, error} = await supabase.from("products").select("*");

  if (error) {
    console.error(error);

    return NextResponse.json({error: error.message, code: error.code}, {status: 500});
  }

  const product = products.find((p: Product) => String(p.id) === String(id));

  if (!product) {
    return NextResponse.json({error: "Product not found"}, {status: 404});
  }

  return NextResponse.json(product);
}

export async function PATCH(request: Request) {
  const supabase = await createClient();

  const body = await request.json();
  const {id, ...updates} = body;

  if (!id) {
    return NextResponse.json({error: "ID is required"}, {status: 400});
  }

  const {data: products, error} = await supabase.from("products").select("*");

  if (error) {
    console.error(error);

    return NextResponse.json({error: error.message, code: error.code}, {status: 500});
  }

  const product = products.find((p: Product) => String(p.id) === String(id));

  if (!product) {
    return NextResponse.json({error: "Product not found"}, {status: 404});
  }

  Object.assign(product, updates);
  await supabase.from("products").update(updates).eq("id", id);

  return NextResponse.json(product);
}
