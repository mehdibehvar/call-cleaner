import { Icompany } from "../types/common";


export async function getCompenies()  {
  const res = await fetch("http://localhost:3000/api/companies", {
    cache: "no-store", // SSR (always fresh)
    // or: next: { revalidate: 60 } // ISR
  });

  return res.json();
}