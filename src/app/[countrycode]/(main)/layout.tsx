import { getBaseUrl } from "@/utils/env";
import { Metadata } from "next";
import Header from "../../../modules/client/components/Navbar";
import { Suspense } from "react";
import MobileNavbar from "@/modules/common/components/mobile-navbar/mobile-navbar";
export const metaData: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: "based in your country",
  description: "we give you services based on the country you live in...",
};
const CountryCodeLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ countrycode: string }>;
}) => {
  const { countrycode } = await params;

  return (
    <div className="container px-4 md:px-8 lg:px-12 py-4 md:py-8">
      <Header countryCode={countrycode} />
      {children}
      {/* ///Wrap the component in a <Suspense> boundary.
      //  This allows Next.js to stream its contents to 
      // the user as soon as it's ready, without blocking the rest of the app. */}
      <Suspense fallback={<span>Loading..........</span>}>
      <MobileNavbar />
      </Suspense>
    </div>
  );
};

export default CountryCodeLayout;
