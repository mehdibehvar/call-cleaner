import { Icompany } from "@/types/global";
import Card from "../../common/components/card/card";
import Link from "next/link";

const Products = ({ allCompenies,countrycode }: { allCompenies?: Icompany[],countrycode:string }) => {
  return (
    <>
      {allCompenies?.map((comp, i) => (
        <Link key={i} href={`/${countrycode}/client/company/${comp._id}`}>
          <Card data={comp} />
        </Link>
      ))}
    </>
  );
};

export default Products;
