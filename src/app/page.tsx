import ProductList from "@/components/products/product_list/product_list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-16 p-4 pt-24 md:p-24">
      <div>
        <h1 className="text-strong text-center text-4xl font-bold">Bienvenido a Global Commerce</h1>
        <p className="mt-4 text-center text-lg text-gray-600">
          ¡Tu tienda única para todas tus necesidades electrónicas!
        </p>
      </div>
      <ProductList />
    </main>
  );
}
