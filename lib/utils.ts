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

export const getAppIdsWithTitle = (Arr: any[]) => {
  return Arr.map((game) => ({
    steamAppID:
      game.external_games?.filter((item: any) => item.category === 1)[0]?.uid ||
      undefined,
    name: game.name,
  }));
};

export const mergePriceData = (data: any[], prices: any[]) => {
  return data.map((game: any[]) => {
    // @ts-ignore
    const catOneItem = game.external_games?.find(
      (item: any) => item.category === 1
    );

    if (catOneItem) {
      const priceData =
        prices.find((item: any) => catOneItem.uid === item?.steamAppID) ||
        undefined;
      return {
        ...game,
        priceData,
      };
    } else {
      return game;
    }
  });
};
