"use client"
import Button from "@/components/button/button";
import useGlobalStore from "@/lib/stores/global-store";
import Link from "next/link";

const SelectService = () => {
  const countryCode = useGlobalStore((s) => s.countryCode);
  return (
<div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="border-2 w-1/2 h-48 p-8 border-gray-300 rounded-md  flex flex-col space-y-4 items-center justify-center">
      <Link className="w-full " href={`/${countryCode}/client/home`}><Button className="w-full" variant={"surface"}>are a client?</Button></Link>
      <Link className="w-full " href={`/${countryCode}/company`}><Button className="w-full" variant={"surface"}>are a company?</Button></Link>
    </div>
</div>
  );
};

export default SelectService;
