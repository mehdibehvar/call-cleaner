import { Icompany } from "@/types/global";
import Card from "./card/card";
import Link from "next/link";

const Products = ({ allCompenies }: { allCompenies?: Icompany[] }) => {
  return (
    <>
      {allCompenies?.map((comp, i) => (
        <Link key={i} href={`/client/company/${comp.id}`}>
          <Card data={comp} />
        </Link>
      ))}
    </>
  );
};

export default Products;
