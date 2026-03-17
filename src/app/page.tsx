import SelectCountryCode from "@/components/select-country/select-country";
import SelectService from "modules/landing/components/select-service";

const page = () => {
  return (
    <div className="container min-h-screen ">
      <div className="bg-primary-200 w-full flex ">
        <SelectCountryCode />
      </div>
      <SelectService />
    </div>
  );
};

export default page;
