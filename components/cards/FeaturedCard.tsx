import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import dayjs from "dayjs";
import { getRatingFace } from "@/lib/RatingHelper";

const FeaturedCard = ({ game }: any) => {
  const newUrl = game.cover.url.replace("thumb", "cover_big_2x");
  const ratingFace = getRatingFace(game.total_rating?.toFixed(0));
  const releaseDate = dayjs
    .unix(game.first_release_date)
    .format("MMM DD, YYYY");

  const steamId = game.external_games?.find((item: any) => item.category === 1);
  const appId = steamId?.uid;

  return (
    <Link
      href={`/game/${appId}`}
      aria-label={`View ${game.name} details`}
      className="group relative"
      prefetch={false}
    >
      <div className="h-full overflow-hidden rounded-sm max-w-[264px] max-h-[560px] ">
        <CardHeader className="border-b p-0 relative h-[374px] w-[264px]">
          <Image
            src={`https:${newUrl}`}
            alt={game.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
          />
        </CardHeader>
      </div>
      <Card
        className={`opacity-0 group-hover:opacity-100 absolute left-0 right-0 max-w-[264px] rounded bottom-0 z-10 ${
          game.videos ? "h-full" : "h-1/2"
        } duration-500 transition-all translate-y-[20px] group-hover:translate-y-[-20] rounded-b-none`}
      >
        <div>
          {game.videos && (
            <iframe
              src={`https://www.youtube.com/embed/${game.videos[0].video_id}`}
              className="w-full h-1/2"
            />
          )}
        </div>
        <CardContent
          className={`flex flex-col justify-around ${
            game.videos ? "h-1/2" : "h-full"
          }`}
        >
          <CardTitle className="line-clamp-2">{game.name}</CardTitle>
          <p>Release Date: {releaseDate}</p>
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
              {ratingFace}
              <span>{game.total_rating?.toFixed(0)}%</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default FeaturedCard;
