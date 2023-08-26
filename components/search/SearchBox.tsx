"use client";
import { useEffect, useState, useTransition, useRef } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import { Skeleton } from "../ui/skeleton";
import { Icons } from "../Icons";
import { filterGamesBySearch } from "@/app/actions/Game";
import { Input } from "../ui/input";
import Image from "next/image";

const SearchBox = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [data, setData] = useState<any[] | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (debouncedQuery.length === 0) setData(null);

    if (debouncedQuery.length > 0) {
      startTransition(async () => {
        const data = await filterGamesBySearch(debouncedQuery);
        if (data?.length === 0) {
          setIsEmpty(true);
          setData(null);
          setIsOpen(true);
        } else {
          setData(data);
          setIsEmpty(false);
        }
      });
    }
  }, [debouncedQuery]);

  return (
    <div
      className="relative rounded-md shadow-sm"
      onBlur={() => setIsOpen(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Icons.search className="w-5 h-5 text-gray-400" aria-hidden="true" />
      </div>
      <Input
        placeholder="Search games..."
        className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-800 bg-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
      focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6
      "
        value={query}
        onChange={(e) => {
          if (e.target.value === "") {
            setQuery("");
            setData(null);
            setIsOpen(false);
            setIsEmpty(false);
          } else {
            setIsOpen(true);
            setQuery(e.target.value);
          }
        }}
        onFocus={(e) => {
          if (e.target.value === "") {
            setQuery("");
            setData(null);
            setIsOpen(false);
            setIsEmpty(false);
          } else {
            setIsOpen(true);
          }
        }}
        type="search"
      />
      <div
        className="absolute flex items-center right-0 mt-1 w-[300px] md:w-[500px] p-2 bg-secondary text-white shadow-lg"
        style={{
          display: isOpen ? "block" : "none",
        }}
      >
        {isEmpty && !isPending && (
          <div className="text-center text-yellow-500">
            No games were found. Please try a different search.
          </div>
        )}
        {isPending || (!data && !isEmpty) ? (
          <div className="space-y-1 overflow-hidden px-1 py-2">
            <Skeleton className="h-4 w-10 rounded" />
            <Skeleton className="h-8 rounded-sm" />
            <Skeleton className="h-8 rounded-sm" />
          </div>
        ) : (
          data?.map((item) => {
            return (
              <div
                key={item.appid}
                className="flex items-center gap-2 w-full mb-2 cursor-pointer hover:bg-[#e3e3e3] hover:bg-opacity-10 last:mb-0"
                onMouseDown={(e) => {
                  e.preventDefault();
                }}
                onClick={() => {
                  router.push(`/game/${item.appid}`);
                  setIsOpen(false);
                  setQuery("");
                  setData(null);
                }}
              >
                <Image
                  src={item.header_image}
                  alt={item.title}
                  className="max-w-[116px] max-h-[65px]"
                  width={116}
                  height={65}
                />
                <div className=" p-2 h-8 flex items-center">
                  <span className="capitalize text-wrap">{item.title}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchBox;
