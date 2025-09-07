import fs from "fs/promises";
import path from "path";

import {Product} from "@/types/product";

const DATA_FILE = path.join(process.cwd(), "src", "products.json");

export async function readProducts() {
  const data = await fs.readFile(DATA_FILE, "utf-8");

  return JSON.parse(data);
}

export async function writeProducts(products: Product[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2));
}
