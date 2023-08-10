import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Badge } from "../ui/badge";
import { getRatingFace } from "@/lib/RatingHelper";
import dayjs from "dayjs";
import Link from "next/link";

const ListView = ({ game }: any) => {
  const steamId = game.external_games?.find((item: any) => item.category === 1);
  const appId = steamId?.uid;
  const releaseDate = dayjs
    .unix(game.first_release_date)
    .format("MMM DD, YYYY");
  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild className="flex relative h-[87px] w-[229px]">
        <Link href={`/game/${appId}`} prefetch={false}>
          <div>
            <Card className="p-0">
              <CardHeader className="p-0 relative flex">
                <Image
                  src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/capsule_231x87.jpg`}
                  alt={game.name}
                  width={229}
                  height={87}
                  className="object-cover rounded-md cursor-pointer border hover:border-yblue"
                  loading="eager"
                />
                <span className="flex items-center gap-1 text-xs font-bold my-auto absolute right-0 bottom-0 border-t-primary border-l-primary border p-1 bg-black rounded-br-md">
                  <Image
                    src={"/ratings-icons/double-arrow-d.png"}
                    alt="rating arrow double down"
                    width={10}
                    height={10}
                    className=""
                  />
                  {game.total_rating?.toFixed(0) || "--"}
                </span>
              </CardHeader>
              <CardContent className="absolute flex justify-around items-center h-full"></CardContent>
            </Card>
          </div>
        </Link>
      </HoverCardTrigger>

      {/* <HoverCardContent
        side="top"
        align="start"
        className="p-0 max-w-[229px]"
        sideOffset={-123}
      >
        <CardContent className="flex flex-col justify-around h-1/2 p-2 space-y-2">
          <CardTitle className="line-clamp-2">{game.name}</CardTitle>
          <span>Release Date: {releaseDate}</span>
          <CardDescription className="line-clamp-3">
            {game.genres?.map((genre: any) => (
              <Badge
                className="text-xs mr-1 bg-[#FF75E6] mb-1"
                key={genre.name}
              >
                {genre.name}
              </Badge>
            ))}
          </CardDescription>
        </CardContent>
      </HoverCardContent> */}
    </HoverCard>
  );
};

export default ListView;

//removed for performance issues with youtube embeds
// {game.videos && (
//   <iframe
//     src={`https://www.youtube.com/embed/${game.videos[0].video_id}`}
//     className="w-full h-1/2"
//     loading="lazy"
//   />
// )}
