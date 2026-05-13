import SelectCountryCode from "@/components/select-country/select-country";
import { Waves } from "@/modules/common/components/ui/wave-background";
import SelectService from "modules/landing/components/select-service";

const page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Waves
          className="h-full w-full"
          strokeColor="rgba(255,255,255,0.35)"
          backgroundColor="#020617"
          pointerSize={0.35}
        />
      </div>
      <div className="container relative z-10 min-h-screen">
        <SelectCountryCode />
        <SelectService />
      </div>
    </div>
  );
};

export default page;
