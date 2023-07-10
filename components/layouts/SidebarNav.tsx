"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SidebarNavItem } from "@/types";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";

export interface SidebarNavProps {
  items: SidebarNavItem[];
}

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname();

  if (!items?.length) return null;

  return (
    <div className="flex w-full flex-col gap-2">
      {items.map((item, idx) => {
        const Icon = Icons[item.icon ?? "chevronLeft"];
        return item.href ? (
          <Link
            key={idx}
            href={item.href}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            <span
              className={cn(
                "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground",
                pathname === item.href
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground",
                item.disabled && "opacity-60"
              )}
            >
              <Icon className="w-4 h-4 mr-2" aria-hidden="true" />
              {item.title}
            </span>
          </Link>
        ) : (
          <span
            key={idx}
            className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
          >
            {item.title}
          </span>
        );
      })}
    </div>
  );
}

export default SidebarNav;
