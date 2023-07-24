import Image from "next/image";
import GameInfoCard from "@/components/cards/GameInfoCard";
import HowLongtoBeat from "@/components/tables/HowLongToBeatTable";
import Description from "@/components/Description";
import SteamReviewCard from "@/components/cards/SteamReviewCard";
import LanguagesChartCard from "@/components/cards/LanguagesChartCard";
import MediaWrapper from "@/components/MediaWrapper";
import ScreenShotWrapper from "@/components/ScreenShotWrapper";
import prisma from "@/lib/prisma";

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

const GamePage = async ({ params }: any) => {
  const gameData = await fetchGame(params.slugId);

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
      <div className="flex flex-row"></div>
      <div className="flex justify-around w-full pt-16">
        <div>
          <Image
            src={gameData.header_image!}
            alt={gameData?.title}
            width={400}
            height={400}
            className="object-cover mb-5"
          />
          <div className="mb-2">
            <MediaWrapper movies={gameData?.movies} />
            <ScreenShotWrapper screenshots={gameData?.screenshots} />
          </div>
          <div className="flex flex-col justify-center mb-5">
            <GameInfoCard {...gameData} />
            <LanguagesChartCard languages={gameData.languages} />
            <HowLongtoBeat />
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <h1 className="text-5xl z-10">{gameData?.title}</h1>
          <p>
            <span className="opacity-75 mr-5">Release Date:</span>{" "}
            {gameData?.release_date}
          </p>

          <div>
            <Description gameData={gameData?.about_the_game} />
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
                  <SteamReviewCard key={review.username} {...review} />
                ))
                .slice(0, Math.ceil(gameData.reviews.length / 2))}
            </div>
          ) : null}
          {gameData.reviews.length > 0 && gameData.reviews !== null ? (
            <div className="grid-cols-1 ">
              {gameData.reviews
                .map((review: any) => (
                  <SteamReviewCard key={review.username} {...review} />
                ))
                .slice(Math.ceil(gameData.reviews.length / 2))}
            </div>
          ) : (
            <h3>No Reviews Provided</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
