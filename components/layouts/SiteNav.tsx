import Link from "next/link";
import type { User } from "@clerk/nextjs/dist/types/server";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Icons } from "@/components/Icons";
import MainNav from "@/components/layouts/MainNav";
import { mainConfig } from "@/config/main";
import MobileNav from "./MobileNav";
import dashboardConfig from "@/config/dashboard";
import GameSearch from "../search/GameSearch";
import SearchBox from "../search/SearchBox";

const userProfileLabels = [
  {
    label: "Account",
    href: "/dashboard/account",
    icon: <Icons.user className="w-4 h-4 mr-2" />,
    shortcut: "⇧⌘A",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <Icons.dashboard className="w-4 h-4 mr-2" />,
    shortcut: "⇧⌘D",
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: <Icons.settings className="w-4 h-4 mr-2" />,
    shortcut: "⇧⌘S",
  },
];

const userLogoutLabel = [
  {
    label: "Logout",
    href: "/signout",
    icon: <Icons.logout className="w-4 h-4 mr-2" />,
    shortcut: "⇧⌘L",
  },
];

interface SiteHeaderProps {
  user: User | null;
}

const SiteNav = async ({ user }: SiteHeaderProps) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-primary bg-background">
      <div className="container flex h-16 items-center">
        <MainNav items={mainConfig.mainNav} />
        <MobileNav
          mainNavItems={mainConfig.mainNav}
          sidebarNavItems={dashboardConfig.sidebarNav}
        />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <SearchBox />
          <nav className="flex items-center space-x-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" className="h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={user.imageUrl}
                        alt={user.username ?? ""}
                      />
                      <AvatarFallback>
                        <AvatarImage
                          src="/profileFallbackImage.svg"
                          alt="profile image"
                        />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.firstName}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    {userProfileLabels.map((item, idx) => (
                      <DropdownMenuItem asChild key={idx}>
                        <Link href={item.href}>
                          {item.icon}
                          {item.label}
                          <DropdownMenuShortcut>
                            {item.shortcut}
                          </DropdownMenuShortcut>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  {userLogoutLabel.map((item, idx) => (
                    <DropdownMenuItem asChild key={idx}>
                      <Link href={item.href}>
                        {item.icon}
                        {item.label}
                        <DropdownMenuShortcut>
                          {item.shortcut}
                        </DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : // <Link href={"/signin"}>
            //   <div className={buttonVariants({ size: "sm" })}>
            //     Sign In
            //     <span className="sr-only">Sign In</span>
            //   </div>
            // </Link>
            null}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteNav;
