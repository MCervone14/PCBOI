import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GameInfoCard(data: any) {
  return (
    <Tabs defaultValue="details" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="whereToBuy">Where to Buy</TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <Card>
          <CardHeader>
            <CardDescription
              dangerouslySetInnerHTML={{ __html: data.short_description }}
            />
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="opacity-50 mr-5">
                {data.publishers.length > 1 ? "Developers:" : "Developer:"}
              </span>{" "}
              {data.developers.map((developer: string, idx: number) => (
                <p key={idx}>{developer}</p>
              ))}
            </div>
            <div className="flex justify-between">
              <span className="opacity-50 mr-5">
                {" "}
                {data.publishers.length > 1 ? "Publishers:" : "Publisher:"}
              </span>
              {data.publishers.map((publisher: string, idx: number) => (
                <p key={idx}>{publisher}</p>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <span className="opacity-50 mr-5">Supported Languages:</span>{" "}
              <div
                dangerouslySetInnerHTML={{ __html: data.supported_languages }}
                style={{ marginTop: "20px", marginBottom: "20px" }}
              />
            </div>
            <div className="flex justify-between">
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
            </div>
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
