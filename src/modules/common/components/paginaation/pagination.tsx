"use client";

import Link from "next/link";
import IconButton from "../icon-button/icon-button";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/helpers";

export default function Pagination({
  page,
  totalPages,
  query,
}: {
  page: number;
  totalPages: number;
  query: Record<string, string>;
}) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex gap-2 p-4">
      {Array.from({ length: totalPages }).map((_, i) => {
        const params = new URLSearchParams();
        Object.entries(query).forEach(([key, value]) => {
          if (value !== undefined) {
            params.set(key, value);
          }
        });
        params.set("page", String(i + 1));
        return (
          <Link
            key={i}
            href={`/client/home/?${params.toString()}`}
            scroll={false}
          >
            <IconButton
              type="button"
              variant="surface"
              className={cn(page === i + 1 && "bg-primary font-bold")}
            >
              {i + 1}
            </IconButton>
          </Link>
        );
      })}
    </div>
  );
}
