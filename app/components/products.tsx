"use client";
import { use } from "react";
import Card from "../api/card/card";
import Link from "next/link";

const Products = ({
  products,
}: {
  products: Promise<{ id: string; name: string }[]>;
}) => {
  const allProducts = use(products);
  return (
    <>
      {allProducts.map((product) => (
        <Link href={`/client/product/${product.id}`}>
          <Card key={product.id} data={product} />{" "}
        </Link>
      ))}
    </>
  );
};

export default Products;
