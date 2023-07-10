"use client";

import type { Option } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Command as CommandPrimitive } from "cmdk";
import { Icons } from "./Icons";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";

interface MultiSelectFilterProps {
  selected: Option[] | null;
  setSelected: React.Dispatch<React.SetStateAction<Option[] | null>>;
  onChange?: (value: Option[] | null) => void;
  placeholder?: string;
  options: Option[];
}

const MultiSelectFilter = ({
  selected,
  setSelected,
  onChange,
  placeholder = "Select options",
  options,
}: MultiSelectFilterProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Register as input field to be used in react-hook-form
  useEffect(() => {
    if (onChange) onChange(selected?.length ? selected : null);
  }, [onChange, selected]);

  const handleSelect = useCallback(
    (option: Option) => {
      setSelected((prev) => [...(prev || []), option]);
    },
    [setSelected]
  );

  const handleRemove = useCallback(
    (option: Option) => {
      setSelected((prev) => prev?.filter((item) => item !== option) ?? []);
    },
    [setSelected]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!inputRef.current) return;

      if (event.key === "Backspace" || event.key === "Delete") {
        setSelected((prev) => prev?.slice(0, -1) ?? []);
      }

      // Blur input on escape
      if (event.key === "Escape") {
        inputRef.current.blur();
      }
    },
    [setSelected]
  );

  const filteredOptions = useMemo(() => {
    return options.filter((option) => {
      if (selected?.find((item) => item.value === option.value)) return false;

      if (query.length === 0) return true;

      return option.label.toLowerCase().includes(query.toLowerCase());
    });
  }, [options, selected, query]);

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent"
    >
      <div className="group rounded-md border px-3 py-2 text-sm border-primary">
        <div className="flex flex-wrap gap-1">
          {selected?.map((option) => (
            <Badge
              className="rounded hover:bg-secondary"
              variant="secondary"
              key={option.value}
            >
              {option.label}
              <Button
                className="ml-2 h-auto bg-transparent p-0 text-primary hover:bg-transparent hover:text-destructive"
                size="sm"
                aria-label="Remove option"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.stopPropagation();
                    handleRemove(option);
                  }
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onClick={(e) => handleRemove(option)}
              >
                <Icons.close className="h-3 w-3" aria-hidden="true" />
              </Button>
            </Badge>
          ))}
          <CommandPrimitive.Input
            ref={inputRef}
            placeholder={placeholder}
            className="flex-1 bg-transparent px-1 py-0.5 outline-none placeholder:text-muted-foreground"
            value={query}
            onValueChange={setQuery}
            onBlur={() => setIsOpen(false)}
            onFocus={() => setIsOpen(true)}
          />
        </div>
      </div>
      <div className="relative z-50 mt-2">
        {isOpen && filteredOptions.length > 0 ? (
          <div className="absolute top-0 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
            <CommandGroup className="h-full overflow-auto">
              {filteredOptions.map((option: Option) => (
                <CommandItem
                  className="px-2 py-1.5 text-sm"
                  key={option.value}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onSelect={() => {
                    handleSelect(option);
                    setQuery("");
                  }}
                >
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  );
};

export default MultiSelectFilter;
