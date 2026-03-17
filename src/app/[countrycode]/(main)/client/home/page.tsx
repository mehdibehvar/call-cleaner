import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { headers } from "next/headers";
import SectionHeader from "../components/section-header";
import getCompaniesAdvanced from "_lib/_services/companies/get-companies-paginated";
import { Carousel } from "@/components/carousel/carousel";
import Button from "@/components/button/button";
import Filter from "@/components/filter/filter";
import Products from "@/components/products";
import Pagination from "@/components/paginaation/pagination";
const descs=[
  `1)this page is showing a list of products or items so we had better to make it a server
  component and fetch the list of the products or data directly from database or 
  query data from database.so server components are suitable for reading data`,
  `2)this page is entirely ssr and is seo friendly.because it is rendered in the server and 
  then it will be sent to client.`
  ,
  `3)for getting list from server we need following things to query database:
    **Company.find(filter).skip(skip).limit(limit).sort(sortQuery).lean()**
   1-filters such as name(which is search) and city {city:kdkf,name:kdjf}
   2-sortQuery that can be createdAt or rating if sort===created_asc then sortQuery is {createdAt:1}
   3-skip that is actually the pagination and we can calculate it in this way : (page-1)*limit 
   4-limit that is the number of items that should be shown in every page
   we can derive all top data from searchParams`,
   `4) for creating a filter component we should create a client side component because
   a user should do actions in this comp or change some states in this filter component we have 
   two state that could be changed by user first is search and second is sorting.when this component is 
   mounted or is mounting we should check the browser url by 🚨useSearchparams hook and update the
   search and sort state based on the searchparams that user has written in url manually in other word we should 
   sync the state with url by 🚨useEffect hook and then when user change a state 
   we should create a 🚨new URLSearchParams and pass the previous or current searchparams to it and then
   set key params for this new urlsearchparams and then push the page to a new url by 
    🚨useRouter hook`
]
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
interface IProps{
 searchParams: {
    page?: string;
    limit?: string;
    sort?: string;
    search?: string;
    city?: string;
  }
}
const Home = async ({
  searchParams,
}: IProps) => {
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
