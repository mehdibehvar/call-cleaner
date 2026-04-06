import { getBaseUrl } from "@/utils/env";
import { Metadata } from "next";
import Header from "../../../modules/client/components/header";
import Navbar from "@/components/navbar/navbar";
import { Suspense } from "react";
export const metaData: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: "based in your country",
  description: "we give you services based on the country you live in...",
};
const CountryCodeLayout = async ({
  children,
}: {
  children: React.ReactNode;

}) => {
  return (
    <div>
      <Header />
      {children}
      {/* ///Wrap the component in a <Suspense> boundary.
      //  This allows Next.js to stream its contents to 
      // the user as soon as it's ready, without blocking the rest of the app. */}
      <Suspense fallback={<span>Loading..........</span>}>
      <Navbar />
      </Suspense>
    </div>
  );
};

export default CountryCodeLayout;
