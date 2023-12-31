import Link from "next/link";
import React from "react";
import { TableRow, TableCell } from "../ui/table";
import dayjs from "dayjs";
import Image from "next/image";
import { getRatingFace } from "@/lib/RatingHelper";

// const fetchGame = async (id: string) => {
//   try {
//     const data = await prisma.game.findUnique({
//       where: {
//         appid: id,
//       },
//     });
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

const RowView = ({ game, released }: any) => {
  const newUrl = game.cover.url.replace("thumb", "cover_small_2x");
  const steamId = game.external_games?.find((item: any) => item.category === 1);
  const appId = steamId?.uid;
  const releaseDate = dayjs
    .unix(game.first_release_date)
    .format("MMM DD, YYYY");
  const rating = getRatingFace(Math.floor(game.total_rating));
  return (
    <TableRow className="border w-full flex flex-col items-center sm:flex-row">
      <TableCell className="p-0 py-1 w-full min-w-[150px] pl-1">
        <Link href={`game/${appId}/${game.slug}`} prefetch={false}>
          <Image
            unoptimized={true}
            src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/capsule_231x87.jpg`}
            alt={game.name}
            width={150}
            height={65}
            className="object-cover rounded-md cursor-pointer mx-auto border hover:border-yblue max-w-[150px] max-h-[65px]"
          />
        </Link>
      </TableCell>
      <TableCell className="p-0 hover:text-pink-500 pl-3 text-md sm:w-full lg:hidden xl:inline-grid py-2">
        <Link href={`game/${appId}`}>{game.name}</Link>
      </TableCell>
      <TableCell className="p-0 text-center sm:w-full">{releaseDate}</TableCell>
      {released && (
        <TableCell className="p-0 text-center flex justify-center h-full gap-1 sm:w-full pt-2">
          {game.total_rating && Number(Math.floor(game.total_rating))}
          <span className="w-[30px] h-[30px]">{rating}</span>
        </TableCell>
      )}
      {/*<TableCell className="text-center p-0 opacity-75 sm:w-full">   // Not sure if I want to use this price cell for the homepage.
        <Link
          href={`https://www.cheapshark.com/redirect?dealID=${game.priceData?.cheapestDealID}`}
          prefetch={false}
          target="_blank"
          className="text-primary hover:text-pink-500"
        >
          {(game.priceData?.cheapest && `$${game.priceData.cheapest}`) || "--"}
        </Link>
      </TableCell> */}
    </TableRow>
  );
};

export default RowView;
