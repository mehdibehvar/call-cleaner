import Card from "../api/card/card";
import Link from "next/link";
import { Icompany } from "@/types/common";

const Products = ({ allCompenies }: { allCompenies?: Icompany[] }) => {
  return (
    <>
      {allCompenies?.map((comp) => (
        <Link key={comp._id} href={`/client/company/${comp._id}`}>
          <Card data={comp} />
        </Link>
      ))}
    </>
  );
};

export default Products;
