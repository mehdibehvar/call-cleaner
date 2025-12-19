"use client";
import { use } from "react";
import Card from "../api/card/card";

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
        <Card key={product.id} data={product} />
      ))}
    </>
  );
};

export default Products;
