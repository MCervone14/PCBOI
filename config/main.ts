import type { MainNavItem } from "@/types";
import { gameCategories } from "./games";

export type MainConfig = typeof mainConfig;

export const mainConfig = {
  name: "PCBOI",
  description: "A place for all things PC related, including Reviews.",
  url: "",
  logo: "",
  mainNav: [
    {
      title: "Games",
      items: [
        {
          title: "All Games",
          href: "/games",
          description: "Catalog of all games.",
        },
        {
          title: "New Games",
          href: "/games/new-games",
          description: "Catalog of newest releases",
        },
      ],
    },
    ...gameCategories.map((category) => ({
      title: category.title,
      items: [
        ...category.subcategories.map((subcategory) => ({
          title: subcategory.title,
          href: `/games/${subcategory.title}?id=${subcategory.id}`,
          description: subcategory.description,
          items: [],
        })),
      ],
    })),
    // {
    //   title: "Reviews",
    //   items: [
    //     {
    //       title: "All Reviews",
    //       href: "/reviews",
    //       description: "Catalog of Reviews",
    //     },
    //     {
    //       title: "Recent",
    //       href: "/reviews",
    //       description: "Recent Reviews",
    //     },
    //   ],
    // },
  ] as MainNavItem[],
};
