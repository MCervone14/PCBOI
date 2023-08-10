import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";

export default function GameInfoCard({ gameData, storeData }: any) {
  return (
    <Tabs defaultValue="details" className="md:w-[400px] w-full mb-2">
      <TabsList className="grid w-full grid-cols-2 bg-pink-500">
        <TabsTrigger value="details" className="text-slate-900">
          Details
        </TabsTrigger>
        <TabsTrigger value="whereToBuy" className="text-slate-900">
          Where to Buy
        </TabsTrigger>
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
          <CardContent className="grid grid-cols-2 p-2.5 gap-7">
            {storeData?.map((store: any, idx: number) => {
              if (store.isActive && store.deals.length > 0) {
                if (store.deals[0].isOnSale === "1") {
                  return (
                    <div key={idx} className="flex items-center gap-10">
                      <Image
                        id={store.storeID}
                        src={`https://cheapshark.com${store.images.logo}`}
                        alt={store.storeName}
                        width={40}
                        height={40}
                        className=""
                      />
                      <Link
                        href={`https://www.cheapshark.com/redirect?dealID=${store.deals[0].dealID}`}
                        target="_blank"
                      >
                        <div className="flex flex-col spacing-y-2 group">
                          <p className="line-through opacity-25">
                            ${store.deals[0].normalPrice}
                          </p>
                          <p className="text-green-600 font-bold text-lg group-hover:underline ">
                            ${store.deals[0].salePrice}
                          </p>
                          <p className="text-yellow-600 text-sm group-hover:underline">
                            {Number(store.deals[0].savings).toFixed(0)}%
                            discount!
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                } else {
                  return (
                    <div key={idx} className="flex items-center gap-10">
                      <Image
                        id={store.storeID}
                        src={`https://cheapshark.com${store.images.logo}`}
                        alt={store.storeName}
                        width={40}
                        height={40}
                        className=""
                      />
                      <Link
                        href={`https://www.cheapshark.com/redirect?dealID=${store.deals[0].dealID}`}
                        target="_blank"
                        className="hover:underline hover:text-pink-500"
                      >
                        <p>${store.deals[0].normalPrice}</p>
                      </Link>
                    </div>
                  );
                }
              }
            })}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
