import Card from "../api/card/card";
import Link from "next/link";
import { Icompany } from "@/types/common";

const  Products = async ({
  fetchingCompeniesPromise,
}: {
  fetchingCompeniesPromise: Promise<Icompany[]>
}) => {
    const allCompenies = await fetchingCompeniesPromise;
  return (
    <>
      {allCompenies?.map((compeny) => (
        <Link href={`/client/compeny/${compeny.id}`}>
          <Card key={compeny.id} data={compeny} />
        </Link>
      ))}
    </>
  );
};

export default Products;
