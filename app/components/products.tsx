"use client";
import { use } from "react";

const Products = ({
  products,
}: {
  products: Promise<{ id: string; name: string }[]>;
}) => {
  const allProducts = use(products);
console.log("All Products:", allProducts);
  return (
    <>
      {allProducts.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center justify-center gap-4 px-6 py-12 text-center"
        >
          <h1>{product.name}</h1>
        </div>
      ))}
    </>
  );
};

export default Products;
