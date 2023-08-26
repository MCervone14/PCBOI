import Image from "next/image";
import GameInfoCard from "@/components/cards/GameInfoCard";
import Description from "@/components/Description";

import LanguagesChartCard from "@/components/cards/LanguagesChartCard";
import MediaWrapper from "@/components/MediaWrapper";
import ScreenShotWrapper from "@/components/ScreenShotWrapper";
import prisma from "@/lib/prisma";
import ReviewCardWrapper from "@/components/ReviewCardWrapper";

const fetchGame = async (id: string) => {
  try {
    const data = await prisma.game.findUnique({
      where: {
        appid: id,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const getStores = async (SteamAppID: string) => {
  try {
    const url = `https://www.cheapshark.com/api/1.0/stores`;
    const data = await fetch(url).then((res) => res.json());

    const gameDealsUrl = `https://www.cheapshark.com/api/1.0/deals?steamAppID=${SteamAppID}`;
    const gameDeals = await fetch(gameDealsUrl).then((res) => res.json());

    const dataWithDeals = data.map((store: any) => {
      const storeDeals = gameDeals?.filter(
        (deal: any) => deal.storeID === store.storeID
      );
      return {
        ...store,
        deals: storeDeals || [],
      };
    });

    return dataWithDeals;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const GamePage = async ({ params }: any) => {
  const gameData = await fetchGame(params.slugId[0]);
  const storeData = await getStores(params.slugId[0]);

  if (!gameData)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <h1 className="text-4xl">
          Sorry! This game was not found. Please try another game.
        </h1>
      </div>
    );

  return (
    <div className="container relative">
      <div
        style={{
          backgroundImage: `url(${gameData?.background_image})`,
        }}
        className="fixed z-[-1] w-full min-h-screen left-0 top-0 opacity-50 bg-cover"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 pt-16 gap-5">
        <div className="grid-cols-1 mx-auto">
          <h1 className="text-5xl z-10">{gameData?.title}</h1>
          <p>
            <span className="opacity-75 mr-5">Release Date:</span>{" "}
            {gameData?.release_date}
          </p>

          <div>
            <Description
              aboutTheGame={gameData?.about_the_game}
              headerImage={gameData?.header_image}
              title={gameData?.title}
            />
          </div>
        </div>
        <div className="grids-cols-1">
          <Image
            src={gameData.header_image!}
            alt={gameData?.title}
            width={460}
            height={215}
            className="object-cover mx-auto mb-5 hidden md:block"
          />
          <div className="flex flex-col justify-center items-center mb-5">
            <GameInfoCard gameData={gameData} storeData={storeData} />
            {gameData.movies.length >= 1 && (
              <MediaWrapper movies={gameData?.movies} />
            )}
            {gameData.screenshots.length >= 1 && (
              <ScreenShotWrapper screenshots={gameData?.screenshots} />
            )}
            <LanguagesChartCard languages={gameData.languages} />
          </div>
        </div>
      </div>
      <div className="mb-10 ">
        <h2 className="text-3xl">Steam Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {gameData.reviews.length > 0 && gameData.reviews !== null ? (
            <div className="grid-cols-1">
              {gameData?.reviews
                .map((review: any) => (
                  <ReviewCardWrapper key={review.username} {...review} />
                ))
                .slice(0, Math.ceil(gameData.reviews.length / 2))}
            </div>
          ) : null}
          {gameData.reviews.length > 0 && gameData.reviews !== null ? (
            <div className="grid-cols-1 ">
              {gameData.reviews
                .map((review: any) => (
                  <ReviewCardWrapper key={review.username} {...review} />
                ))
                .slice(Math.ceil(gameData.reviews.length / 2))}
            </div>
          ) : (
            <h3>No Steams Reviews at this time.</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
