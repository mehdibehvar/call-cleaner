"use client"
import { cn } from "@/utils/helpers";
import Link from "next/link";
import { useParams } from "next/navigation";

const LocalizedClientLink = ({
  href,
  children,
  className,        
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?:string
}) => {
  const {countrycode} = useParams();

  return <Link className={cn("text-primary-400",className)} href={`/${countrycode}/${href}`} {...props}>{children}</Link>;
};

export default LocalizedClientLink;
