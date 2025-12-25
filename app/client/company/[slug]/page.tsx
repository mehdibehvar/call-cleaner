
import Image from "next/image";
import { getCompany } from "services/comps.service";

const Company = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = await params;
  console.log(slug);
  //To Do: fetch company
  // const company=await getCompany(slug.slug);
  // dynamic seo title
  // dynamic seo description
  // dynamic seo image
  const company = await getCompany(slug.slug);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>{company.name}</h1>
      <h3>{company.shortDescription}</h3>
      <p>{company.longDescription}</p>
      <div>
        <Image
          src={company.thumbnail}
          alt={company.name}
          width={400}
          height={200}
        />
      </div>
    </div>
  );
};

export default Company;
