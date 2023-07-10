import { type Icons } from "@/components/Icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export type Option = {
  label: string;
  value: string;
};

export enum category {
  "Adventure" = "Adventure",
  "Indie" = "Indie",
  "RPG" = "RPG",
  "Simulation" = "Simulation",
  "Sports" = "Sports",
  "Strategy" = "Strategy",
  "Fighting" = "Fighting",
  "Platformer" = "Platformer",
  "Shooter" = "Shooter",
}

export type Game = {
  title: string;
  id: string;
  name: string;
  description: string;
  image: string;
  category: [string];
  rating: number;
};
