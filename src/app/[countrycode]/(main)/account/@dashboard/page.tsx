import { retriveUser } from "@/lib/_data/users"
import Overview from "modules/account/components/overview"
import { Metadata } from "next"
import { notFound } from "next/navigation"
export const metadata: Metadata = {
  title: "Account",
  description: "Overview of your account activity.",
}

export default async function OverviewTemplate() {
  const result = await retriveUser().catch(() => null)
 const user=result.ok?result.data:null;
  if (!result.ok) {
    notFound()
  }

  return <Overview user={user}  />
}
