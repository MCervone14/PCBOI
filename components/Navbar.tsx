"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import LoginRegister from "@/components/modals/LoginRegister";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { User, Heart, ScrollText, LogOut, AlignJustify } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import useAuthModal from "@/hooks/useAuthModal";
import useSidebarButton from "@/hooks/UseSidebarButton";
import { useUser } from "@/hooks/useUser";
import { toast } from "react-hot-toast";
import { Caesar_Dressing } from "next/font/google";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "PC Reviews",
    href: "/reviews",
    description: "Displays only PC related gaming reviews.",
  },
];

const profile: { title: string; icon: React.ReactElement }[] = [
  { title: "/Profile", icon: <User /> },
  { title: "/MyReviews", icon: <ScrollText /> },
  { title: "/Favorites", icon: <Heart /> },
];
const Caesar = Caesar_Dressing({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Navbar = () => {
  const { user } = useUser();
  const router = useRouter();
  const isOpen = useAuthModal((state) => state.isOpen);
  const toggleAuth = useAuthModal((state) => state.toggleAuthModal);
  const toggleSidebar = useSidebarButton((state) => state.toggleSidebar);
  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    toggleAuth();
    router.refresh();
    if (error) toast.error(error.message);
    else toast.success("Logged out!");
  };

  return (
    <div className={`flex justify-between items-center pt-2 mr-36`}>
      <div className="flex gap-10 items-center">
        <Button variant="ghost" className="m-1" onClick={toggleSidebar}>
          <AlignJustify className="text-white" />
        </Button>
        <Link
          href={"/"}
          className={`text-3xl ${Caesar.className} hover:text-yblue`}
        >
          PCBOI
        </Link>
      </div>
      <div className="flex gap-20">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Games
              </NavigationMenuTrigger>
              <NavigationMenuContent className="text-white">
                <ul className="w-[175px]">
                  <ListItem href="/games" title="PC Games">
                    Displays only PC game information.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Reviews
              </NavigationMenuTrigger>
              <NavigationMenuContent className="text-white">
                <ul className=" w-[200px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            {!user && (
              <Dialog open={isOpen} onOpenChange={toggleAuth}>
                <DialogTrigger asChild>
                  <Button
                    className="rounded-full font-bold text-[.75rem] lg:text-[1rem]"
                    variant="ghost"
                    size="sm"
                  >
                    Login/Sign Up
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <LoginRegister />
                </DialogContent>
              </Dialog>
            )}
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">
                    <Avatar>
                      <AvatarImage
                        src="/profileFallbackImage.svg"
                        className="bg-white rounded-full w-7 h-7"
                      />
                      <AvatarFallback>
                        <AvatarImage
                          src="/profileFallbackImage.svg"
                          className="bg-white rounded-full w-7 h-7"
                        />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Sheet>
                    <DropdownMenuGroup>
                      {profile.map((component) => (
                        <SheetTrigger
                          asChild
                          key={component.title}
                          className="flex "
                        >
                          <Button variant="ghost" size="sm" className="ml-6">
                            <span className="absolute left-2">
                              {component.icon}
                            </span>
                            {component.title}
                          </Button>
                        </SheetTrigger>
                      ))}
                    </DropdownMenuGroup>
                    <SheetContent position="right" size="sm">
                      <Link
                        href="/profile"
                        onClick={() => router.push("/profile")}
                      >
                        Profile
                      </Link>
                    </SheetContent>
                  </Sheet>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Button
                      variant="ghost"
                      className="w-full flex justify-center"
                      onClick={() => {
                        handleLogout();
                      }}
                    >
                      <span className="absolute left-2">{<LogOut />}</span>
                      Logout
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
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

export default Navbar;
