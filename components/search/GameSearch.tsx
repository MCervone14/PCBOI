"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";

export default function GameSearch() {
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query === "") return;

    updateSearchParams(query.toLowerCase());
  };

  const updateSearchParams = (queryTerm: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (queryTerm) {
      searchParams.set("q", queryTerm);
    } else {
      searchParams.delete("q");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <form onSubmit={handleSearch}>
      <Input
        placeholder="Search for Games..."
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </form>
  );
}
