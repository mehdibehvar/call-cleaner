"use client";
import { cn } from "@/utils/helpers";
import { useState } from "react";
import Button from "../button/button";
interface IProps{
     discs:string[]
}
const Description = ({discs}:IProps) => {
  const [showDiscription, setshowDiscription] = useState<boolean>(false);
  const handleToggle = () => {
    setshowDiscription(!showDiscription);
    console.log(showDiscription);
  };
  return (
    <>
      <Button onClick={handleToggle}>show it</Button>
      <div
        className={cn(
          showDiscription ? "" : "hidden",
          "bg-gray-900 p-2",
        )}
      >
        <h1 className="text-3xl text-cyan-500">
          this page is a server side rendering page for fetching list of some
          products.
        </h1>
        {discs.map((disc,i)=><p key={i} className={cn(i==0 ? "text-yellow-400" : i==1 ? "text-cyan-500" : "text-gray-50" ,"text-2xl")}>{disc}</p>)}
        <code>
          {/* export async function fetchCompanies() {
            const res = await fetchApi({
              url: "/api/v1/company",
              next: {
                tags: ["companies"],
                revalidate: 60,
              },
            });
            return res.json();
          } */}
        </code>
      </div>
    </>
  );
};

export default Description;
