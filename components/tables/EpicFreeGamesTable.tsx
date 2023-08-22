import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";

const EpicFreeGamesTable = ({ title, epicData }: any) => {
  return (
    <Table className="mb-5">
      <TableHeader>
        <TableRow className="border-primary">
          <TableHead className="w-full text-yellow-500 font-extrabold text-xl">
            {title}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="gap-5 mt-2 grid grid-cols-2 lg:grid-cols-3 place-items-center mx-auto">
        {epicData
          .sort((a: any, b: any) => {
            const aDiscountPrice = a.price?.totalPrice.discountPrice;
            const bDiscountPrice = b.price?.totalPrice.discountPrice;

            if (aDiscountPrice === 0 && bDiscountPrice === 0) {
              return 0; // Leave them in their original order
            }

            if (aDiscountPrice === 0) {
              return -1; // 'a' has discountPrice of 0, so 'a' comes first
            }

            if (bDiscountPrice === 0) {
              return 1; // 'b' has discountPrice of 0, so 'b' comes first
            }

            // Sort based on discount price (ascending order)
            return aDiscountPrice - bDiscountPrice;
          })
          .map((game: any) => {
            const thumbnail = game.keyImages.find(
              (image: any) => image.type === "Thumbnail"
            );

            if (game.promotions) {
              return (
                <TableRow
                  className="flex flex-col border-none"
                  key={epicData.id}
                >
                  <TableCell>
                    <Link
                      href={`https://store.epicgames.com/en-US/p/${game.productSlug}`}
                      target="_blank"
                      className="hover:opacity-75"
                    >
                      <Image
                        src={thumbnail?.url}
                        alt={game.title}
                        width={330}
                        height={440}
                        className="rounded-t-md "
                      />
                      {game.promotions.promotionalOffers.length > 0 ? (
                        <span className="h-6 bg-pink-700 rounded-b-md flex items-center justify-center">
                          FREE NOW
                        </span>
                      ) : (
                        <span className="h-6 bg-black rounded-b-md flex items-center justify-center">
                          COMING SOON
                        </span>
                      )}
                    </Link>
                  </TableCell>

                  <TableCell className="text-lg font-bold line-clamp-1 mt-3 ml-1">
                    {game.title}
                  </TableCell>
                  <TableCell className="ml-1">
                    {game.promotions.promotionalOffers.length > 0
                      ? `Free now -
                        ${dayjs(
                          game.promotions.promotionalOffers[0]
                            ?.promotionalOffers[0]?.endDate
                        ).format("MMM D, h:mm A")}`
                      : `Free ${dayjs(
                          game.promotions.upcomingPromotionalOffers[0]
                            ?.promotionalOffers[0]?.startDate
                        ).format("MMM D")} -
                            ${dayjs(
                              game.promotions.upcomingPromotionalOffers[0]
                                ?.promotionalOffers[0]?.endDate
                            ).format("MMM D, h:mm A")}`}
                  </TableCell>
                </TableRow>
              );
            }
          })}
      </TableBody>
    </Table>
  );
};

export default EpicFreeGamesTable;
