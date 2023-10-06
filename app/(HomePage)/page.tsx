import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import TableView from "@/components/layouts/TableView";
import { PopularNewReleases } from "../actions/PopularNewReleases";
import { EpicReleasesOf2023 } from "../actions/EpicReleasesOf2023";
import { HiddenGems } from "../actions/HiddenGems";
import { AwesomeIndieGames } from "../actions/AwesomeIndieGames";
import { EndlessHours } from "../actions/EndlessHours";
import { ComingSoon } from "../actions/ComingSoon";
import { Icons } from "@/components/Icons";
import { EpicFreeGames } from "../actions/EpicFreeGames";
import EpicFreeGamesTable from "@/components/tables/EpicFreeGamesTable";

export const metadata = {
  title: "Home | PCBOI",
  description: "A site for PC game enthusiasts",
};

const fetchHomepageLists = async (
  endpoint: string,
  { offset = 0 }: { offset: number }
) => {
  const url = `${process.env.API_URL_BASE}/${endpoint}/`;
  const arrOfGames = [];

  //Getting Game info for each table
  const Popular_New_Releases = await PopularNewReleases(url);
  const Epic_Releases_of_2023 = await EpicReleasesOf2023(url);
  const Hidden_Gems = await HiddenGems(url);
  const Awesome_Indie_Games = await AwesomeIndieGames(url);
  const Endless_Hours = await EndlessHours(url);
  const Coming_Soon = await ComingSoon(url);

  // Getting the Epic Free Games info
  const EpicData = await EpicFreeGames(
    "https://store-site-backend-static-ipv4.ak.epicgames.com/freeGamesPromotions"
  );

  arrOfGames.push(
    Popular_New_Releases,
    Epic_Releases_of_2023,
    Hidden_Gems,
    Awesome_Indie_Games,
    Endless_Hours,
    Coming_Soon
  );

  return {
    Popular_New_Releases,
    Epic_Releases_of_2023,
    Hidden_Gems,
    Awesome_Indie_Games,
    Endless_Hours,
    Coming_Soon,
    EpicData,
  };
};

export default async function Home() {
  const {
    Popular_New_Releases,
    Awesome_Indie_Games,
    Coming_Soon,
    Endless_Hours,
    Epic_Releases_of_2023,
    Hidden_Gems,
    EpicData,
  } = await fetchHomepageLists("games", {
    offset: 0,
  });

  const tableCategories = [
    {
      title: "New Releases",
      category: Popular_New_Releases,
      released: true,
    },
    {
      title: "2023 Game Year",
      category: Epic_Releases_of_2023,
      released: true,
    },
    {
      title: "Hidden Gems",
      category: Hidden_Gems,
      released: true,
    },
    {
      title: "Indie Games",
      category: Awesome_Indie_Games,
      released: true,
    },
    {
      title: "Endless Hours",
      category: Endless_Hours,
      released: true,
    },
    {
      title: "Coming Soon",
      category: Coming_Soon,
      released: false,
    },
  ];

  return (
    <div className="mx-auto container">
      <div>
        <div className="my-5 flex flex-col lg:flex-row relative w-full">
          <div className="lg:w-3/4 relative">
            <AspectRatio ratio={19.5 / 9}>
              <Image
                src="starfield.jpg"
                alt="Photo"
                fill
                className=" rounded-b-none rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none object-cover mx-auto z-[0]"
                placeholder="blur"
                blurDataURL="starfield.jpg"
              />
            </AspectRatio>
            <Button
              variant="link"
              className="absolute bottom-4 right-4 text-xs opacity-95"
            >
              <Link href={`/game/1716740`} className="text-primary">
                Starfield (2023)
              </Link>
            </Button>
          </div>
          <div className="lg:w-1/4 p-4 bg-gradient-to-b from-pink-600 to-slate-900 flex flex-col justify-around rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
            <div>
              <h1 className="font-extrabold text-2xl lg:text-4xl transition text-center text-white mb-2">
                Everything PC Gaming.
              </h1>
            </div>
            <div className="font-bold text-sm lg:text-md xl:text-lg text-primary text-center mt-2">
              <Balancer>
                <p className="mb-4 flex items-center  gap-2">
                  <span>
                    <Icons.check className="w-10 h-10 text-green-400" />
                  </span>
                  The latest information on new releases.
                </p>
                <p className="mb-4 flex items-center gap-2">
                  <span>
                    <Icons.check className="w-10 h-10 text-green-400" />
                  </span>
                  Find out where to find the best prices.
                </p>
                <p className="mb-1 flex items-center gap-2">
                  <span>
                    <Image
                      src="/coming-soon1.png"
                      alt="Hanging icons created by Freepik - Flaticon"
                      width={40}
                      height={40}
                      className="lg:min-w-[40px] lg:min-h-[40px]"
                    />
                  </span>
                  You can read reviews in the near future.
                </p>
              </Balancer>
            </div>
          </div>
        </div>
        <div>
          <EpicFreeGamesTable
            epicData={EpicData.data.Catalog.searchStore.elements}
            title="Epic's Free Games"
          />
        </div>
        <div className="flex flex-col items-center mx-auto w-full mb-8">
          <div className="bg-black/80 w-full rounded-lg shadow-2xl border border-primary">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 p-5">
              {tableCategories.map((category, idx) => (
                <TableView
                  key={idx}
                  title={category.title}
                  category={category.category}
                  released={category.released}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}