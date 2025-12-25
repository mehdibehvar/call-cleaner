"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("created_desc");

  // sync URL → state (بعد از mount)
  useEffect(() => {
    setMounted(true);
    setSearch(searchParams.get("search") ?? "");
    setSort(searchParams.get("sort") ?? "created_desc");
  }, [searchParams]);

  const update = (key: string, value: string) => {
    const query = new URLSearchParams(searchParams.toString());
    query.set(key, value);
    query.set("page", "1");
    router.push(`?${query.toString()}`);
  };

  if (!mounted) return null; // 🚨 hydration guard

  return (
    <div className="flex gap-4 border-2 border-gray-300 rounded-md p-4 mb-2">
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          update("search", e.target.value);
        }}
      />

      <select
        value={sort}
        onChange={(e) => {
          setSort(e.target.value);
          update("sort", e.target.value);
        }}
      >
        <option value="created_desc">Newest</option>
        <option value="created_asc">Oldest</option>
        <option value="rating_desc">Top Rated</option>
        <option value="rating_asc">Lowest Rated</option>
      </select>
    </div>
  );
};

export default Filter;
