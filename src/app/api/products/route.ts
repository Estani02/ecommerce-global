import {NextResponse} from "next/server";

import {Product} from "@/types/product";
import {createClient} from "@/supabase/server";

export async function GET(req: Request) {
  const supabase = await createClient();

  const {searchParams} = new URL(req.url);
  const query = searchParams.get("search")?.toLowerCase();
  const favParam = searchParams.get("fav");

  const {data: products, error} = await supabase
    .from("products")
    .select("*")
    .order("titulo", {ascending: true});

  if (error) {
    console.error(error);

    return NextResponse.json({error: error.message, code: error.code}, {status: 500});
  }

  let filtered = products;

  if (query) {
    filtered = filtered.filter(
      (p: Product) =>
        p.titulo.toLowerCase().includes(query) || p.marca.toLowerCase().includes(query),
    );
  }

  if (favParam === "true") {
    filtered = filtered.filter((p: Product) => p.fav === true);
  }

  return NextResponse.json(filtered);
}
