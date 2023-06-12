"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { allDocs } from "@/.contentlayer/generated";

export default function SearchComboBox() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-1/2 justify-between"
        >
          {searchTerm
            ? allDocs.find(
                (review) =>
                  review.slugAsParams.toLowerCase() ===
                  searchTerm.toLowerCase().replace(/\s/g, "-")
              )?.title
            : "Search..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[668px]">
        <Command>
          <CommandInput placeholder="Search for Review" />
          <CommandEmpty>
            No review was found. Please try a different search!
          </CommandEmpty>
          <CommandGroup>
            {allDocs.map((review) => (
              <Link
                href={`/reviews/search/${review.slugAsParams}`}
                key={review.title}
              >
                <CommandItem
                  onSelect={(currentValue) => {
                    setSearchTerm(
                      currentValue === searchTerm ? "" : currentValue
                    );
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      searchTerm.toLowerCase() === review.title.toLowerCase()
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {review.title}
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
