import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import TitleHeader from "@/components/TitleHeader";
import ListView from "@/components/layouts/ListView";
import { Separator } from "@/components/ui/separator";
import { allDocs } from "@/.contentlayer/generated";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";
import ReviewHomePageCard from "@/components/cards/ReviewHomePageCard";
import { Suspense } from "react";
import LoadingHomePage from "@/components/layouts/LoadingHomePage";
import starfield from "/public/starfield.jpg";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 9;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const fetchHomepageLists = async (
  endpoint: string,
  { offset = 0 }: { offset: number }
) => {
  const url = `${process.env.API_URL_BASE}/${endpoint}/`;

  const TopSellerGames = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.API_CLIENT_ID as string,
      Authorization: `Bearer ${process.env.API_SECRET_TOKEN}`,
    },
    body: `f  id, slug, name, total_rating, total_rating_count,videos.*, external_games.uid, external_games.category, cover.url, release_dates.platform, first_release_date, genres.name; sort total_rating desc; limit 25;
    where cover.url != null & release_dates.platform = (6) & id = (1372,50531,3277,203722,114795,200165,24654,119133,1877,119171,25076,25657,18866,26128,136625,7360,138949,1020,127346,191692,3212,9509,11582,1081,143482);`,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  const TopNewReleases = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.API_CLIENT_ID as string,
      Authorization: `Bearer ${process.env.API_SECRET_TOKEN}`,
    },
    body: `f  id, slug, name, total_rating, total_rating_count,videos.*, external_games.uid, external_games.category, cover.url, release_dates.platform, first_release_date, genres.name; sort total_rating desc; limit 25;
    where cover.url != null & release_dates.platform = (6) & id = (217553,199116,204354,126212,240558,199748,236660,187096,145216,235846);`,
    // 235846 = Halls Of Torment, 187096 = Forever Skies, 236660 = Ghost Trick, 217553 = Story of Seasons, 199748 = 20 minutes till Dawn, 199116 = Brotato, 126212 = Trepang 2, 204354 = Aliens: Dark Descent, 145216 = fight forever
    // 1348, 240558 = F1,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return { TopSellerGames, TopNewReleases };
};

export default async function Home() {
  const { TopNewReleases, TopSellerGames } = await fetchHomepageLists("games", {
    offset: 0,
  });

  return (
    <div className="mx-auto w-full md:container">
      <Suspense fallback={<LoadingHomePage />}>
        <div>
          <div className="relative my-5">
            <AspectRatio ratio={19.5 / 9}>
              <Image
                src={starfield}
                alt="Photo"
                fill
                className="rounded-lg object-cover mx-auto z-[0]"
                placeholder="blur"
                priority={true}
              />
            </AspectRatio>
            <Button
              variant="link"
              className="absolute bottom-4 right-4 text-xs opacity-30"
            >
              <Link href={`/game/1716740`} prefetch={false}>
                Starfield (2023)
              </Link>
            </Button>
          </div>
          <div className="flex flex-col items-center mx-auto w-full mb-8">
            <h1 className="pb-3 font-bold lg:text-5xl md:text-3xl transition sm:text-2xl text-center text-white">
              <Balancer>
                Everything Gaming, All in One Place. Search for Games and
                Reviews.
              </Balancer>
            </h1>
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <TitleHeader title="Top Sellers" className="flex justify-between" />
            <Separator className="bg-primary" />
            <div className="flex flex-wrap justify-center gap-4 lg:gap-11">
              {TopSellerGames.map((game: any, idx: number) => (
                <ListView game={game} key={idx} />
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <TitleHeader
                title="Popular New Releases"
                className="flex justify-between"
              />
              <Separator className="bg-primary" />
              <div className="flex flex-wrap justify-center gap-4 lg:gap-11 ">
                {TopNewReleases.map((game: any, idx: number) => (
                  <ListView key={idx} game={game} />
                ))}
              </div>
              <TitleHeader
                title="Search by Category"
                className="mt-10 flex justify-center"
              />
              <Separator className="bg-primary" />
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
              <div className="mb-5 space-y-2">
                <TitleHeader title="New Reviews" />
                <Separator className="bg-primary" />
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
                  {allDocs.map((doc, idx: number) => (
                    <ReviewHomePageCard {...doc} key={idx} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
