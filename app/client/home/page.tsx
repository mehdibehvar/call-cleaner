import BubbleBox from "@/app/components/bubble-box/bubble-box";
import SectionHeader from "../components/section-header";
import { Carousel } from "@/app/components/carousel/carousel";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "@/app/components/button/button";
import Link from "next/link";
import { Suspense } from "react";
import Spinner from "@/app/components/spinner";
import Products from "@/app/components/products";
import Filter from "@/app/components/filter/filter";
import { getCompenies } from "@/app/services/compenies";
import { Icompany } from "@/app/types/common";

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

const Home = () => {
  const getCompeniesPromise = getCompenies();
  return (
    <main className="min-h-screen  space-y-4 md:space-y-8 py-4 md:py-8">
      <Carousel items={items} />
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
          <Suspense fallback={<Spinner />}>
            <Products fetchingCompeniesPromise={getCompeniesPromise} />
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default Home;
