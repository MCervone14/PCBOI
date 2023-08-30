"use server";
import prisma from "@/lib/prisma";

export const filterGamesBySearch = async (query: string) => {
  if (query.length === 0) return null;

  const result = await prisma.game.findMany({
    where: {
      title: {
        contains: query,
        mode: "insensitive",
      },
    },

    select: {
      title: true,
      header_image: true,
      appid: true,
    },
    orderBy: {
      title: "asc",
    },
    take: 10,
  });

  return result;
};
