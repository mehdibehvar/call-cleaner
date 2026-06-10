import { getBaseUrl } from "@/utils/env";
import { Metadata } from "next";
import Navbar from "../../../modules/client/components/Navbar";
import MobileNavbar from "@/modules/common/components/mobile-navbar/mobile-navbar";
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
    <div className="mx-auto min-h-svh w-full max-w-7xl px-4 py-4 pb-24 sm:px-6 sm:pb-6 md:px-8 md:py-8">
      <Suspense fallback={<div className="h-24" />}>
        <Navbar />
      </Suspense>
      {children}
      <Suspense fallback={<div className="h-24" />}>
        <MobileNavbar />
      </Suspense>
    </div>
  );
};

export default CountryCodeLayout;
