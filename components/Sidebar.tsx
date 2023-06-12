"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Home, Search } from "lucide-react";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import GameLibrary from "./GameLibrary";
import useSidebarButton from "@/hooks/UseSidebarButton";

interface SideBarProps {
  children?: React.ReactNode;
}

const Sidebar = ({ children }: SideBarProps) => {
  const sidebarOpen = useSidebarButton((state) => state.sidebarOpen);
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: <Home size={24} />,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: <Search size={24} />,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      <div
        className={`hidden md:flex flex-col gap-y-2 h-full p-2 transition duration-300 ease-in-out z-100  ${
          sidebarOpen ? "transform w-0 p-0" : "transform w-[275px]"
        }`}
      >
        <Box className="rounded-xl">
          <div className="flex flex-col gap-y-4 px-5 py-4 relative">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <GameLibrary />
        </Box>
      </div>
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default Sidebar;
