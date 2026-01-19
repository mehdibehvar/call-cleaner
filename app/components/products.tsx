import Card from "./card/card";
import Link from "next/link";
import { Icompany } from "@/types/common";

const Products = ({ allCompenies }: { allCompenies?: Icompany[] }) => {
  return (
    <>
      {allCompenies?.map((comp) => (
        <Link key={comp.id} href={`/client/company/${comp.id}`}>
          <Card data={comp} />
        </Link>
      ))}
    </>
  );
};

export default Products;
