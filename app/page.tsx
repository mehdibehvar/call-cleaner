import { Suspense, use } from "react";
import Products from "./components/products";

export default async function Home() {
  const data = fetch("http://localhost:3000/api/products").then((res) => res.json());
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col items-center justify-center gap-4 px-6 py-12 text-center">
        <Suspense fallback={<div>Loading...</div>}>
          <Products products={data} />
        </Suspense>
      </main>
    </div>
  );
}


