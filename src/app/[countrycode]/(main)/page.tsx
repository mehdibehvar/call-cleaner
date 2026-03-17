import { Suspense } from "react";
import Link from "next/link";
import { fetchCompanies } from "_lib/_services/comps.service";
import Products from "@/components/products";
import Spinner from "@/components/spinner";
import { cn } from "@/utils/helpers";
import Description from "@/components/description/Description";
const discs = [
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
];
export default async function Home({
  params,
}: {
  params: Promise<{ countrycode: string }>;
}) {
  /*
 رندر کامپوننت تا خط await متوقف میشه
سرور صبر می‌کنه دیتا آماده بشه
ادامه‌ی رندر از همون نقطه انجام میشه
کل HTML یک‌بار ساخته میشه و تمیز میاد سمت کلاینت
*/
  const allCompenies = await fetchCompanies();
  //const allCompenies=use(fetchComps)// this is not good approach because it will re-render the page on
  // after use notice that the promise is not resolved
  // so it suspends the page and waits for the promise to resolve
  const slug = await params;
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Suspense fallback={<Spinner />}>
          <Products allCompenies={allCompenies} />
        </Suspense>
      </div>
      <Description discs={discs} />
    </main>
  );
}
