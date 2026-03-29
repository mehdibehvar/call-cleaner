"use client"
import Link from "next/link";
import { useParams } from "next/navigation";

const LocalizedClientLink = ({
  path,
  children,
  className,        
  ...props
}: {
  path: string;
  children: React.ReactNode;
  className:string
}) => {
  const {countrycode} = useParams();

  return <Link href={`/${countrycode}/${path}`} {...props}>{children}</Link>;
};

export default LocalizedClientLink;
