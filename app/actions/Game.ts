"use server";
import prisma from "@/lib/prisma";

// export async function filterProductsAction(query: string) {
//   if (query.length === 0) return null

//   const filteredProducts = await db
//     .select({
//       id: products.id,
//       name: products.name,
//       category: products.category,
//     })
//     .from(products)
//     .where(like(products.name, `%${query}%`))
//     .orderBy(desc(products.createdAt))
//     .limit(10)

//   const productsByCategory = Object.values(products.category.enumValues).map(
//     (category) => ({
//       category,
//       products: filteredProducts.filter(
//         (product) => product.category === category
//       ),
//     })
//   )

//   return productsByCategory
// }

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
