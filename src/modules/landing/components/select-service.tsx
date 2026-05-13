"use client";
import Button from "@/components/button/button";
import useGlobalStore from "@/lib/stores/global-store";
import Link from "next/link";

const SelectService = () => {
  const countryCode = useGlobalStore((s) => s.countryCode);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-primary text-2xl font-bold">
        Wellcome to Call Cleaner
      </h1>
      <div className=" flex flex-col space-y-4 mt-6">
        <Link className="w-full " href={`/${countryCode}/client/home`}>
          <Button className="w-full" variant={"soft"}>
            are a client?
          </Button>
        </Link>
        <Link className="w-full " href={`/${countryCode}/company`}>
          <Button className="w-full" variant={"soft"}>
            are a company?
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SelectService;
