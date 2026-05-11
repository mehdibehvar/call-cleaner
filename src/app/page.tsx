import SelectCountryCode from "@/components/select-country/select-country";
import SelectService from "modules/landing/components/select-service";

const page = () => {
  return (
    <div className="container min-h-screen">

          <SelectCountryCode />

      <SelectService />
    </div>
  );
};

export default page;
