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
}

const epicData = [
  {
    id: 1,
    title: "EarthLock",
    href: "https://store.epicgames.com/en-US/p/earthlock-e7d979",
    image:
      "https://cdn1.epicgames.com/spt-assets/3fa7dc9ed5df483cb4cba9a1e7d7497c/earthlock-15ff1.png?h=480&quality=medium&resize=1&w=854",
    isFree: true,
    startDate: "2023-11-16T16:00:00.000Z",
    endDate: "2023-11-23T16:00:00.000Z",
  },
  {
    id: 2,
    title: "Surviving the Aftermath",
    href: "https://www.epicgames.com/store/en-US/p/surviving-the-aftermath",
    image:
      "https://cdn1.epicgames.com/offer/95b4d5a753d042678f775d5e1eb5ab25/EGS_SurvivingtheAftermath_IceflakeStudiosOy_S1_2560x1440-61c69731778b92a32a9dbfd7c1a35d72?h=480&quality=medium&resize=1&w=854",
    isFree: true,
    startDate: "2023-11-16T16:00:00.000Z",
    endDate: "2023-11-23T16:00:00.000Z",
  },
  {
    id: 3,
    title: "Deliver Us Mars",
    href: "https://store.epicgames.com/en-US/p/deliver-us-mars",
    image:
      "https://cdn1.epicgames.com/offer/53ec6d9f552241549c4d8aa1a42bcb3b/EGS_DeliverUsMars_KeokeNInteractive_S1_2560x1440-b5b36e7ef7feabf180837cc9d15efdae?h=480&quality=medium&resize=1&w=854",
    isFree: false,
    startDate: "2023-11-23T16:00:00.000Z",
    endDate: "2023-11-30T16:00:00.000Z",
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
