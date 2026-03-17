import { getBaseUrl } from "@/utils/env";
import { Metadata } from "next";
 export const metaData:Metadata={
    metadataBase:new URL(getBaseUrl()),
    title:"based in your country",
    description:"we give you services based on the country you live in..."
  }
const CountryCodeLayout =async ({
  children,
}: {
  children: React.ReactNode;
}) => {

  return (
      <div>
      {children}
    </div>
  );
};

export default CountryCodeLayout;
