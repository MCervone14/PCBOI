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
          description: "Catalog of the most popular games. A-Z",
        },
        {
          title: "New Games",
          href: "/games/new-games",
          description: "Top new releases from the last 6 months",
        },
        {
          title: "Top Games",
          href: "/games/top-100",
          description: "Top games from 2009 onwards",
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
