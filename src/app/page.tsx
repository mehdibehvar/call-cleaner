import SelectCountryCode from "@/components/select-country/select-country";
import SelectService from "modules/landing/components/select-service";

const page = () => {
  return (
    <div className="container min-h-screen border border-secondary-600 p-2">
      <h1 className="text-secondary-600 text-2xl mx-auto w-fit">
        this is landing page
      </h1>
      <div className="bg-primary-200 w-full flex ">
        <SelectCountryCode />
      </div>
        <SelectService />
    </div>
  );
};

export default page;
