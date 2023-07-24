import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function GameInfoCard(gameData: any) {
  return (
    <Tabs defaultValue="details" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="whereToBuy">Where to Buy</TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <Card>
          <CardHeader>
            <p>
              <span className="opacity-50 mr-5">Description:</span>
              {gameData.game_description}
            </p>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="opacity-50 mr-5">
                {gameData.publishers.length > 1 ? "Developers:" : "Developer:"}
              </span>{" "}
              <div className="flex gap-2">
                {gameData.developers.map((developer: string, idx: number) => (
                  <p key={idx}>
                    {developer}
                    <span>
                      {idx === gameData.developers.length - 1 ? "" : ","}
                    </span>
                  </p>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 mr-5">
                {" "}
                {gameData.publishers.length > 1 ? "Publishers:" : "Publisher:"}
              </span>
              <div className="flex gap-2">
                {gameData.publishers.map((publisher: string, idx: number) => (
                  <p key={idx} className="flex">
                    {publisher}
                    <span>
                      {idx === gameData.publishers.length - 1 ? "" : ","}
                    </span>
                  </p>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 mr-5">Steam Rating:</span>
              <div className="flex flex-col items-end">
                {gameData.review_descriptor_summary.length > 1 ? (
                  <p>{gameData?.review_descriptor_summary[1]}</p>
                ) : (
                  <p>{gameData?.review_descriptor_summary[0]}</p>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              {gameData?.metacritic_score !== null && (
                <>
                  <span className="opacity-50 mr-5">Metacritic:</span>
                  <Link href={gameData?.metacritic_link}>
                    {gameData?.metacritic_score}
                  </Link>
                </>
              )}
            </div>
            <div className="flex flex-wrap gap-1 ">
              <span className="opacity-50 mr-5">Tags:</span>

              {gameData?.tags.map((tag: string, idx: number) => (
                <span key={idx} className="bg-pink-500 p-1">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-1 ">
              <span className="opacity-50 mr-5">Features:</span>

              {gameData?.game_features.map((feature: string, idx: number) => (
                <span key={idx} className="bg-muted p-1">
                  {feature}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-between">
              <span className="opacity-50 mr-5">
                Steam Deck Compatibility:{" "}
              </span>
              {gameData.steam_deck_compatibility || "Not Available"}
            </div>
            {gameData?.gaming_rating && (
              <div className="flex flex-wrap justify-between">
                <span className="opacity-50 mr-5">Game Rating: </span>
                {gameData?.game_rating}
              </div>
            )}

            {/* {Might use later if I get the info on support platform} */}
            {/* <div className="flex justify-between">
              <span className="opacity-50 mr-5">Supported Platforms:</span>{" "}
              <div className="flex items-center">
                <div
                  className={
                    data.platforms.linux || data.platforms.mac ? "px-2" : ""
                  }
                >
                  {data.platforms.windows && "Windows"}
                </div>
                <div>
                  {data.platforms.mac && (
                    <div className="border-l-2 px-2">Mac</div>
                  )}
                </div>
                <div>
                  {data.platforms.linux && (
                    <div className="border-l-2 px-2">Linux</div>
                  )}
                </div>
              </div>
            </div> */}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="whereToBuy">
        <Card>
          <CardContent className="space-y-2 flex flex-col p-5">
            <div className="flex justify-between">
              <span className="opacity-50 mr-5">Steam:</span>
              <p>Price</p>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 mr-5">Epic Games Store:</span>
              <p>Price</p>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 mr-5">GoG:</span>
              <p>Price</p>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 mr-5">Humble Bundle:</span>
              <p>Price</p>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 mr-5">Microsoft Store:</span>
              <p>Price</p>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 mr-5">Target:</span>
              <p>Price</p>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 mr-5">Best Buy:</span>
              <p>Price</p>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 mr-5">Amazon:</span>
              <p>Price</p>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 mr-5">Origin:</span>
              <p>Price</p>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 mr-5">Itch.io:</span>
              <p>Price</p>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 mr-5">Green Man Gaming:</span>
              <p>Price</p>
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 mr-5">Fanatical:</span>
              <p>Price</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
