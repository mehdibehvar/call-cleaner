import { Carousel } from "@/components/carousel/carousel";
import { getCompany } from "_services/companies/get-company-by-id";
import Image from "next/image";
import { notFound } from "next/navigation";
export const fakeGallery = [
  {
    url: "https://picsum.photos/id/1015/600/400",
    caption: "Front view of the office",
    order: 1,
  },
  {
    url: "https://picsum.photos/id/1016/600/400",
    caption: "Team working in the main hall",
    order: 2,
  },
  {
    url: "https://picsum.photos/id/1018/600/400",
    caption: "Conference room setup",
    order: 3,
  },
  {
    url: "https://picsum.photos/id/1020/600/400",
    caption: "Reception area",
    order: 4,
  },
  {
    url: "https://picsum.photos/id/1024/600/400",
    caption: "Outdoor view with greenery",
    order: 5,
  },
  {
    url: "https://picsum.photos/id/1027/600/400",
    caption: "Product showcase corner",
    order: 6,
  },
  {
    url: "https://picsum.photos/id/1035/600/400",
    caption: "Breakout lounge",
    order: 7,
  },
  {
    url: "https://picsum.photos/id/1038/600/400",
    caption: "Panoramic view of the workspace",
    order: 8,
  }
];

const Company = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = await params;

  const company = await getCompany(slug.slug);
  if (!company) notFound();
  //To Do: dynamic seo
  return (
    <div className="space-y-2 md:space-y-4">
      <h1 className="text-bold text-sm md:text-4xl text-primary">{company.name}</h1>
      <div className="md:grid md:grid-cols-6 gap-2">
        <div className="col-span-4 relative h-48 md:h-64 overflow-hidden rounded-md">
          <Image
            src={company.thumbnail}
            alt={company.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-2 hidden md:block border-2 border-gray-300 rounded-md p-4 md:p-8">
          <p className="text-lg">{company.shortDescription}</p>
        </div>
      </div>
      <p className="p-4 text-2xl">{company.longDescription}</p>
      {/* company.gallery && company.gallery.length > 0 &&  */}
      {(
        <div className="md:grid md:grid-cols-12">
          <div className="col-span-2"></div>
          <Carousel items={fakeGallery} className="col-span-8" />
          <div className="col-span-2"></div>
        </div>
      )}
    </div>
  );
};

export default Company;
