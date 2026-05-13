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
} & Omit<React.ComponentProps<typeof Link>, "href">) => {
  const {countrycode} = useParams();
  const cleanCountryCode = String(countrycode ?? "").replace(/^\/+|\/+$/g, "");
  const cleanHref = href.replace(/^\/+/, "");

  return <Link className={cn("text-primary-400",className)} href={`/${cleanCountryCode}/${cleanHref}`} {...props}>{children}</Link>;
};

export default LocalizedClientLink;
