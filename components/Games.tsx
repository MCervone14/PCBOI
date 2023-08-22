"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Game, Option } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Icons } from "@/components/Icons";
import MultiSelectFilter from "@/components/MultiSelectFilter";
import PaginationButton from "@/components/PaginationButton";
import { useCallback, useEffect, useState, useTransition } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useDebounce } from "@/hooks/useDebounce";
import { sortOptions } from "@/config/games";
import FeaturedCard from "./cards/FeaturedCard";

type subcategory = {
  id: string;
  title: string;
  image?: string;
  genre: string;
  description?: string;
};

interface GamesProps {
  games: Game[];
  categories: subcategory[];
}

const Games = ({ games, categories }: GamesProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [selectedCategories, setSelectedCategories] = useState<Option[] | null>(
    null
  );
  const [ratingsRange, setRatingsRange] = useState<[number, number]>([0, 100]);
  const debouncedRating = useDebounce(ratingsRange, 500);

  //Search params
  const page = searchParams?.get("page") ?? "1";
  const sort = searchParams?.get("sort") ?? "asc";
  const offset = searchParams?.get("offset") ?? "0";
  let pageNumber = +offset / 20 + 1;
  let gameLength = games.length;

  const createQueryString = useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());

      Object.entries(params).forEach(([key, value]) => {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      });

      return newSearchParams.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const [min, max] = debouncedRating;
    startTransition(() => {
      router.push(
        `${pathname}?${createQueryString({
          ratings_range: `${min},${max}`,
        })}`
      );
    });
  }, [debouncedRating, router]);

  useEffect(() => {
    startTransition(() => {
      router.push(
        `${pathname}?${createQueryString({
          categories: selectedCategories?.length
            ? selectedCategories.map((category) => category.value).join(".")
            : null,
        })}`
      );
    });
  }, [selectedCategories]);

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center space-x-2 justify-between">
        <div className="flex gap-5">
          <Sheet>
            <SheetTrigger asChild>
              <Button aria-label="filter games" size="sm" disabled={isPending}>
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-around border-l-primary h-full">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <Separator className="bg-primary" />
              <div className="flex flex-1 flex-col gap-5 px-1">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium tarcking-wide text-foreground">
                    Ratings Range (0 - 100)
                  </h3>
                  <Slider
                    variant="range"
                    thickness="thin"
                    defaultValue={[0, 100]}
                    max={100}
                    min={0}
                    step={1}
                    value={ratingsRange}
                    onValueChange={(value: typeof ratingsRange) =>
                      setRatingsRange(value)
                    }
                  />
                  <div className="flex items-center space-x-4">
                    <Input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      max={ratingsRange[1]}
                      value={ratingsRange[0]}
                      className="h-9 border-primary"
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        setRatingsRange([value, ratingsRange[1]]);
                      }}
                    />
                    <span className="text-muted-foreground">-</span>
                    <Input
                      type="number"
                      inputMode="numeric"
                      min={ratingsRange[0]}
                      max={100}
                      value={ratingsRange[1]}
                      className="h-9 border-primary"
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        setRatingsRange([ratingsRange[0], value]);
                      }}
                    />
                  </div>
                </div>
                {categories?.length ? (
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium tracking-wide text-foreground">
                      Categories
                    </h3>
                    <MultiSelectFilter
                      placeholder="Filter by categories"
                      selected={selectedCategories}
                      setSelected={setSelectedCategories}
                      options={categories.map((category: any) => ({
                        label: category.title,
                        value: category.id,
                      }))}
                    />
                  </div>
                ) : null}
              </div>
              <div className="space-y-2">
                <Separator className="bg-primary" />
                <SheetFooter>
                  <Button
                    aria-label="Clear filters"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      startTransition(() => {
                        router.push(
                          `${pathname}?${createQueryString({
                            ratings_range: "0,100",
                            categories: "false",
                          })}`
                        );

                        setRatingsRange([0, 100]);
                        setSelectedCategories(null);
                      });
                    }}
                    disabled={isPending}
                  >
                    Clear Filters
                  </Button>
                </SheetFooter>
              </div>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-label="Sort Games" size="sm" disabled={isPending}>
                Sort
                <Icons.chevronDown
                  className="ml-2 w-4 h-4"
                  aria-hidden="true"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {sortOptions.map((option) => (
                <DropdownMenuItem
                  key={option.label}
                  className={cn(option.value === sort && "font-bold")}
                  onClick={() => {
                    startTransition(() => {
                      router.push(
                        `${pathname}?${createQueryString({
                          sort: option.value,
                        })}`
                      );
                    });
                  }}
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          {games.length ? (
            <PaginationButton
              startTransition={startTransition}
              isPending={isPending}
              pathname={pathname}
              router={router}
              createQueryString={createQueryString}
              sort={sort}
              pageNumber={pageNumber}
              offset={+offset}
              gamesLength={gameLength}
              page={page}
            />
          ) : null}
        </div>
      </div>
      {!isPending && !games.length ? (
        <div className="mx-auto flex max-w-xs h-full items-start flex-col justify-start space-y-1.5">
          <h1 className="text-center text-2xl font-bold">
            No Games were found!
          </h1>
          <p className="text-center text-muted-foreground">
            Try changing your filters, or check back later.
          </p>
        </div>
      ) : null}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {games.map((game, idx) => (
          <FeaturedCard key={idx} game={game} />
        ))}
      </div>
      {games.length ? (
        <PaginationButton
          startTransition={startTransition}
          isPending={isPending}
          pathname={pathname}
          router={router}
          createQueryString={createQueryString}
          sort={sort}
          pageNumber={pageNumber}
          offset={+offset}
          gamesLength={gameLength}
          page={page}
        />
      ) : null}
    </div>
  );
};

export default Games;
