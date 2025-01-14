"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { fromUrlQuery, removeKeysFromQuery } from "@/lib/url";

const filters = [
  { name: "Newest", value: "newest" },
  { name: "Popular", value: "popular" },
  { name: "Unanswered", value: "unanswered" },
  { name: "Recommended", value: "recommended" },
];
const HomeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter");
  const [active, setActive] = useState(filterParams || "");

  const handleTypeClick = (filter: string) => {
    let newUrl = "";
    if (filter == active) {
      setActive("");
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
    } else {
      setActive(filter);
      newUrl = fromUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter.toLowerCase(),
      });
    }
    router.push(newUrl, { scroll: false });
  };
  return (
    <div className="flex-wrap hidden gap-3 mt-10 sm:flex">
      {filters.map((filter) => (
        <Button
          onClick={() => handleTypeClick(filter.value)}
          className={cn(
            "px-6 py-3 capitalize rounded-lg shadow-none body-medium",
            active === filter.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
          )}
          key={filter.value}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
