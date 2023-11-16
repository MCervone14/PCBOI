"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { MainNavItem } from "@/types";
import { Caesar_Dressing } from "next/font/google";

const Caesar = Caesar_Dressing({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

interface MainNavProps {
  items?: MainNavItem[];
}

const MainNav = ({ items }: MainNavProps) => {
  return (
    <div className="hidden gap-6 lg:flex">
      <Link
        aria-label="Home"
        href={"/"}
        className={`hidden relative lg:flex hover:text-pink-500 text-3xl ${Caesar.className}`}
      >
        PCBOI
      </Link>
      <NavigationMenu delayDuration={100}>
        <NavigationMenuList>
          {items?.[0]?.items ? (
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-auto bg-slate-950">
                {items[0].title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] list-none">
                  {items[0].items.map((item, idx) => (
                    <ListItem
                      key={idx}
                      title={item.title}
                      href={item.href}
                      className="text-primary"
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : null}
          {items
            ?.filter((item) => item.title !== items[0]?.title)
            .map((item, idx) =>
              item?.items ? (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuTrigger className="h-auto capitalize text-white bg-slate-950">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[500px] list-none">
                      {item.items.map((item, idx) => (
                        <ListItem
                          key={idx}
                          title={item.title}
                          href={item.href}
                          className="text-primary "
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                item.href && (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "h-auto")}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )
            )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MainNav;
