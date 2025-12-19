import { Suspense } from "react";
import Products from "./components/products";
import Spinner from "./components/spinner";

export default async function Home() {
  const data = fetch("http://localhost:3000/api/products").then((res) =>
    res.json()
  );
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Suspense fallback={<Spinner />}>
          <Products products={data} />
        </Suspense>
      </div>
    </main>
  );
}
