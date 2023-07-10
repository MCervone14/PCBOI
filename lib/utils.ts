import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export function unslugify(str: string) {
  return str.replace(/-/g, " ");
}

export function getUnixTime(seconds: number) {
  return Math.floor(Date.now() / 1000) - seconds;
}

export const tagNumber = (typeId: number, genreId: number) => {
  if (genreId === undefined || null) return;
  let tagNumber = typeId << 28;
  return (tagNumber |= genreId);
};
