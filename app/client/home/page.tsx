import SectionHeader from "../components/section-header";
import { Carousel } from "@/components/carousel/carousel";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "@/components/button/button";
import Link from "next/link";
import Products from "@/components/products";
import Filter from "@/components/filter/filter";
import { headers } from "next/headers";
import Pagination from "@/components/paginaation/pagination";
import getCompaniesAdvanced from "_services/companies/get-companies-paginated";

const items = [
  {
    id: 1,
    url: "/images/carousel/carousel-1.jpg",
    alt: "Slide 1",
    caption: "Slide 1",
    
  },
  {
    id: 2,
    url: "/images/carousel/carousel-2.jpg",
    alt: "Slide 2",
    caption: "Slide 2",
    
  },
  {
    id: 3,
    url: "/images/carousel/carousel-3.jpeg",
    alt: "Slide 3",
    caption: "Slide 3",
    
  },
];

const Home = async ({
  searchParams,
}: {
  searchParams: {
    page?: string;
    limit?: string;
    sort?: string;
    search?: string;
    city?: string;
  };
}) => {
  // Read request headers first to satisfy Next's prerender-time checks
  headers();
  const { page: searchPage, limit, sort, search, city } = await searchParams;
  const page = searchPage ? Number(searchPage as string) : 1;
  // SSR کامل
  // SEO friendly
  const { companies, totalPages } = await getCompaniesAdvanced({
    page,
    limit: limit ? Number(limit as string) : 8,
    sort,
    search,
    city,
  });
  return (
    <main className="min-h-screen  space-y-4 md:space-y-8 py-4 md:py-8">
      <section>
        <div className="md:grid md:grid-cols-4 md:gap-2">
          <div className="hidden md:block border-2 border-gray-300 rounded-md p-4 md:p-8">
            <h1 className="text-3xl font-bold">Welcome to Call Cleaner</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              molestie, neque non scelerisque ultricies, nisi dolor egestas
              augue, vel suscipit nisl nunc eu purus. Sed vitae nisi eget tortor
            </p>
          </div>
          <Carousel items={items} className="col-span-2" />
          <div className="hidden md:block border-2 border-gray-300 rounded-md p-4 md:p-8">
            <h1 className="text-3xl font-bold">Welcome to Call Cleaner</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              molestie, neque non scelerisque ultricies, nisi dolor egestas
              augue, vel suscipit nisl nunc eu purus. Sed vitae nisi eget tortor
              tincidunt condimentum. Sed eget nisl eget nunc pellentesque
              aliquet. Sed in libero ut nisi tincidunt sollicitudin. Donec eget
              nulla euismod,
            </p>
          </div>
        </div>
      </section>
      <section>
        <Link href="/client/booking">
          <Button size={"md"} className="w-full text-lg">
            Book a service
            <ArrowRightIcon className="size-6 animate-bounce" />
          </Button>
        </Link>
      </section>
      <section>
        <SectionHeader title="companies" />
        <Filter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Products allCompenies={companies} />
        </div>
        <div className="flex justify-center">
          <Pagination
            page={page}
            totalPages={totalPages}
            query={{
              sort: sort ?? "",
              search: search ?? "",
              city: city ?? "",
              limit: limit ?? "",
            }}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
