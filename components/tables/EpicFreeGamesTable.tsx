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

interface EpicFreeGamesTableProps {
  title: string;
  data: any;
}

const epicData = [
  {
    id: 1,
    title: "Gigantic: Rampage Edition",
    href: "https://store.epicgames.com/en-US/p/gigantic-rampage-edition-03f532",
    image:
      "https://cdn1.epicgames.com/spt-assets/6630e3dcc72a4e2285e91ca48aa0eb4b/gigantic-rampage-edition-pjf64.jpg?h=480&quality=medium&resize=1&w=854",
    isFree: true,
    startDate: "2024-08-22T16:00:00.000Z",
    endDate: "2024-08-29T16:00:00.000Z",
  },
  {
    id: 2,
    title: "The Callisto Protocol",
    href: "https://www.epicgames.com/store/en-US/p/the-callisto-protocol",
    image:
      "https://cdn1.epicgames.com/offer/6b0541b5d9aa476cbf407643ab3b1d7d/EGS_TheCallistoProtocol_StrikingDistanceStudios_S2_1200x1600-1e31eacc92833279f5b7a8d07cd3826c?h=480&quality=medium&resize=1&w=854",
    isFree: true,
    startDate: "2024-08-22T16:00:00.000Z",
    endDate: "2024-08-29T16:00:00.000Z",
  },
  {
    id: 3,
    title: "Fallout® Classic Collection",
    href: "https://store.epicgames.com/en-US/bundles/fallout-classic-collection",
    image:
      "https://cdn1.epicgames.com/offer/08f9ecb2186a454cacee6b05d06098ec/EGS_FalloutClassicCollection_BethesdaGameStudios_S2_1200x1600-4b3ea48c3b7de78a18277ce0c7d2ef9f?h=480&quality=medium&resize=1&w=854",
    isFree: false,
    startDate: "2024-08-29T16:00:00.000Z",
    endDate: "2024-09-05T16:00:00.000Z",
  },
];

const EpicFreeGamesTable = ({ title }: EpicFreeGamesTableProps) => {
  return (
    <Table className="mb-5">
      <TableHeader>
        <TableRow className="border-primary mb-10">
          <TableHead className="w-full text-yellow-500 font-extrabold text-xl">
            {title}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="gap-2 mt-2 flex flex-wrap justify-around">
        {epicData.map((game) => {
          return (
            <TableRow className="flex flex-col border-none" key={game.id}>
              <TableCell>
                <Link
                  href={game.href}
                  target="_blank"
                  className="hover:bg-white hover:opacity-90"
                >
                  <Image
                    src={game.image}
                    alt={game.title}
                    width={375}
                    height={300}
                    className="rounded-t-md"
                    placeholder="blur"
                    blurDataURL={game.image}
                    priority
                  />
                  {game.isFree ? (
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
                {game.isFree
                  ? `Free Now -
                        ${dayjs(game.endDate).format("MMM D")}`
                  : `Free on ${dayjs(game.startDate).format("MMM D")} -
                            ${dayjs(game.endDate).format("MMM D")}`}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default EpicFreeGamesTable;
