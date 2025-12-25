import SectionHeader from "../components/section-header";
import { Carousel } from "@/components/carousel/carousel";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "@/components/button/button";
import Link from "next/link";
import Products from "@/components/products";
import Filter from "@/components/filter/filter";
import { getCompaniesaction } from "../actions/compenies";

const items = [
  {
    id: 1,
    src: "/images/carousel/carousel-1.jpg",
    alt: "Slide 1",
    title: "Slide 1",
    url: "/",
  },
  {
    id: 2,
    src: "/images/carousel/carousel-2.jpg",
    alt: "Slide 2",
    title: "Slide 2",
    url: "/",
  },
  {
    id: 3,
    src: "/images/carousel/carousel-3.jpeg",
    alt: "Slide 3",
    title: "Slide 3",
    url: "/",
  },
];

const Home = async () => {
  const getCompeniesResolved = await getCompaniesaction();
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
          <Products allCompenies={getCompeniesResolved} />
        </div>
      </section>
    </main>
  );
};

export default Home;
