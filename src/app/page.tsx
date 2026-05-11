import SelectCountryCode from "@/components/select-country/select-country";
import SelectService from "modules/landing/components/select-service";

const page = () => {
  return (
    <div className="container min-h-screen">
      <div>
          <SelectCountryCode />
        <h1 className="text-secondary text-2xl mx-auto w-fit">
          Wellcome to Call Cleaner
        </h1>
      </div>
      <SelectService />
    </div>
  );
};

export default page;
