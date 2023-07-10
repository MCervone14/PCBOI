import Image from "next/image";
import GameInfoCard from "@/components/cards/GameInfoCard";
import HowLongtoBeat from "@/components/tables/HowLongToBeatTable";
import PriceHistory from "@/components/tables/PriceHistoryTable";

interface FilterProps {
  slug: string;
}

interface SearchParamsProps {
  title: string;
}

const fetchGame = async (filters: FilterProps) => {
  const { slug } = filters;

  const url = "https://store.steampowered.com/api/appdetails";

  const response = await fetch(`${url}?appids=${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Something went wrong");

  return await response.json();
};

const GamePage = async ({ params }: any) => {
  const game = await fetchGame({ slug: params.slugId });
  const { data } = game[params.slugId];

  return (
    <div className="container relative">
      <div className="h-screen absolute z-[-1] opacity-5">
        <Image
          src={data.screenshots[0].path_full}
          alt={data.name}
          width={1920}
          height={1080}
          className="rounded-lg mx-auto"
        />
      </div>
      <div className="flex gap-10 pt-28">
        <div>
          <Image
            src={data.header_image}
            alt={data.name}
            width={500}
            height={400}
            className="object-cover mb-5"
          />
          <div className="flex justify-center mb-5">
            <GameInfoCard {...data} />
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <h2 className="text-5xl z-10">{data.name}</h2>
          <p>
            <span className="opacity-75 mr-5">Release Date:</span>{" "}
            {data.release_date.date}
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: data.detailed_description }}
            className="prose lg:prose-xl article-content"
          />
        </div>
      </div>
      <div className="mb-10 border-[2px] p-5">
        <h2 className="text-3xl">HowLongtoBeat</h2>
        <HowLongtoBeat />
      </div>
      <div className="mb-10 border-[2px] p-5">
        <h2 className="text-3xl">Price History</h2>
        <PriceHistory />
      </div>
      <div className="mb-10">
        <h2 className="text-3xl">Reviews</h2>
        <p className="text-center text-xl">Under Construction</p>
      </div>
    </div>
  );
};

export default GamePage;
