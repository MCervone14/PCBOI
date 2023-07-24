import Image from "next/image";
import { CardContent, CardDescription, CardTitle } from "../ui/card";
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
  const ratingFace = getRatingFace(game.total_rating?.toFixed(0));
  const releaseDate = dayjs
    .unix(game.first_release_date)
    .format("MMM DD, YYYY");
  return (
    <HoverCard openDelay={400}>
      <HoverCardTrigger asChild className="flex relative h-[87px] w-[229px]">
        <Link href={`/game/${appId}`} prefetch={false}>
          <Image
            src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/capsule_231x87.jpg`}
            alt={game.name}
            width={229}
            height={87}
            className="object-cover rounded-md cursor-pointer border hover:border-yblue"
            loading="eager"
          />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent side="right" align="start" className="p-0">
        <CardContent className="flex flex-col justify-around h-1/2 p-2 space-y-2">
          <CardTitle className="line-clamp-2">{game.name}</CardTitle>
          <small>Release Date: {releaseDate}</small>
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
          <div className="flex justify-between">
            <span>IGDB + Critic Rating:</span>
            <p className="flex gap-1">
              <span>{ratingFace}</span>
              <span>
                {game.total_rating?.toFixed(0)}
                {game.total_rating && "%"}
              </span>
            </p>
          </div>
        </CardContent>
      </HoverCardContent>
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
