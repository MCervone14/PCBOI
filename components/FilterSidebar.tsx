"use client";

import { Separator } from "@radix-ui/react-dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import React from "react";
import MultiSelectFilter from "./MultiSelectFilter";
import { category } from "@/types";

interface FilterSidebarProps {
  categories: category[];
}

const FilterSidebar = (
  { categories }: FilterSidebarProps,
  { selectedCategories, setSelectedCategories }: any
) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-1 mt-[65px]">Filter Options</h2>
      <Separator className="bg-primary mb-2" />
      <div className="flex flex-1 flex-col gap-5 overflow-hidden px-1">
        <div className="space-y-4">
          <h3 className="text-sm font-medium tracking-wide text-foreground">
            Ratings Range
          </h3>
          <Slider
            variant="range"
            thickness="thin"
            defaultValue={[0, 100]}
            max={100}
            min={0}
            step={1}
          />
          <div className="flex items-center space-x-4">
            <Input
              type="number"
              inputMode="numeric"
              min={0}
              max={100}
              className="h-9 border-primary"
            />
            <span className="text-muted-foreground">-</span>
            <Input
              type="number"
              inputMode="numeric"
              min={0}
              max={100}
              className="h-9 border-primary"
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
                label: category,
                value: category,
              }))}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FilterSidebar;
