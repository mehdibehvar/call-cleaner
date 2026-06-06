import { Suspense } from "react";
import Link from "next/link";
import { fetchCompanies } from "_lib/_services/comps.service";
import Products from "modules/company/components/compenies";
import Spinner from "@/components/spinner";
import Description from "@/components/description/Description";
const discs = [
  `It might be better to use ssg for the home page and category pages, because they are not changing that much and they are not personalized for each user. but for product pages it might be better to use isr because they are changing more often and they are personalized for each user.`,
  ` we use fetch here for getting list from server by making a request to
          this api:"/api/v1/company".In the App Router system the fetch API
          force cache the data by default that is something like static behavior
          specially when we use this method for getting list in server
          components.this method can be defined in a server component or
          somewhere outside it.`,
  `       this is ISR page so on the server it first reach to fetch line and the rendering 
          will stop and wait
          until receiving data from the database then it render the rest of the
          page from that point and send it to client. when a new product or item is added or
          created in the database we should revalidate this path or tag in the
          method or functions that we have written for creating new items.`,
  `  //const allCompenies=use(fetchComps)// this is not good approach because it will re-render the page on
  // after use notice that the promise is not resolved
  // so it suspends the page and waits for the promise to resolve`,
  `Homepage            → SSG
Category Pages      → ISR
Product Pages       → ISR
Search Results      → SSR
Cart                → CSR
Checkout            → CSR
Dashboard            → CSR`
];
export default async function Home({
  params,
}: {
  params: Promise<{ countrycode: string }>;
}) {

  const result = await fetchCompanies();
  const slug = await params;
  if (!result.ok) {
    return (
      <div className="flex items-center justify-center h-full w-full ">
        <p className="text-danger p-2">something has went wrong try again</p>
      </div>
    );
  }
  return (
    <main className="flex flex-col items-center justify-center">
      <header className="w-full flex flex-col justify-center mb-2">
        <h1 className="text-3xl font-bold text-center">
          Welcome to Call Cleaner
        </h1>
        <nav className="flex justify-start">
          <ul className="flex gap-2">
            <li className="bg-primary-100 p-1 rounded-md">
              <Link href={`${slug.countrycode}/account`}>login</Link>
            </li>
            <li className="bg-primary-100 p-1 rounded-md">
              <Link href={`${slug.countrycode}/client/home`}>home</Link>
            </li>
            <li className="bg-primary-100 p-1 rounded-md">
              <Link href={`${slug.countrycode}/company`}>company</Link>
            </li>
            <li className="bg-primary-100 p-1 rounded-md">
              <a href="/test">ancher home</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="mb-4">
          ///TO DO :show a list of hight rated companies in the home page and make
          /// it dynamic by getting the data from the database 
          ///and show them in a swiper and make it responsive and add some styles to it
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Products allCompenies={result.data} countrycode={slug.countrycode} />
      </div>
      <Description discs={discs} />
    </main>
  );
}
