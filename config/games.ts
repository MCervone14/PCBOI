import { type Game } from "@/types";

export const sortOptions = [
  { label: "Title A-Z (asc)", value: " sort name asc" },
  { label: "Title Z-A (desc)", value: "sort name desc" },
  {
    label: "Release Date (asc)",
    value: "sort first_release_date asc",
  },
  {
    label: "Release Date (desc)",
    value: "sort first_release_date desc",
  },
  { label: "Rating (asc)", value: "sort total_rating asc" },
  { label: "Rating (desc)", value: "sort total_rating desc" },
];

export const gameCategories: {
  title: Game["title"];
  subcategories: {
    title: string;
    description?: string;
    image?: string;
    genre: string;
    id: number;
  }[];
}[] = [
  {
    title: "Popular Categories",
    subcategories: [
      {
        title: "Adventure",
        description: "story-driven and focus on exploration.",
        image: "/category-backgrounds/Adventure.png",
        genre: "adventure",
        id: 31,
      },
      {
        title: "Fighting",
        description: "involves close-range combat.",
        image: "/category-backgrounds/Indie.png",
        genre: "fighting",
        id: 4,
      },
      {
        title: "Indie",
        description: "created by a small team or a single person.",
        image: "/category-backgrounds/Indie.png",
        genre: "indie",
        id: 32,
      },
      {
        title: "Platformer",
        description: "involves jumping between suspended platforms.",
        image: "/category-backgrounds/Indie.png",
        genre: "platform",
        id: 8,
      },
      {
        title: "RPG",
        description: "involves character development and progression.",
        image: "/category-backgrounds/RPG.png",
        genre: "role-playing-games-rpg",
        id: 12,
      },
      {
        title: "Shooter",
        description: "involves shooting enemies or objects.",
        image: "/category-backgrounds/Indie.png",
        genre: "shooter",
        id: 5,
      },
      {
        title: "Simulation",
        description: "involves real-world simulation.",
        image: "/category-backgrounds/Simulation.png",
        genre: "simulation",
        id: 13,
      },
      {
        title: "Sports",
        description: "involves physical sports.",
        image: "/category-backgrounds/Sports.png",
        genre: "sports",
        id: 14,
      },
      {
        title: "Strategy",
        description: "involves strategic thinking and planning.",
        image: "/category-backgrounds/Strategy.png",
        genre: "strategy",
        id: 15,
      },
    ],
  },
];
