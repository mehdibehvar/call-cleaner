import { Suspense } from "react";
import Products from "./components/products";
import Spinner from "./components/spinner";
import Link from "next/link";
import { fetchCompanies } from "services/comps.service";

export default async function Home() {
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
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <nav>
          <h1 className="text-3xl font-bold">Welcome to Call Cleaner</h1>

          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/client/home">home</Link>
            </li>
            <li>
              <Link href="/dashboard/company">dash</Link>
            </li>
            <li>
              <a href="/client/home">ancher home</a>
            </li>
          </ul>
        </nav>
          <Suspense fallback={<Spinner />}>
            <Products allCompenies={allCompenies} />
          </Suspense>
      </div>
    </main>
  );
}
