import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import GameInfoCard from "@/components/cards/GameInfoCard";
import HowLongtoBeat from "@/components/tables/HowLongToBeatTable";
import PriceHistory from "@/components/tables/PriceHistoryTable";

const GamePage = () => {
  return (
    <div className="container relative">
      <div className="image-container">
        <AspectRatio ratio={19.5 / 9}>
          <Image
            src="/northgardBackdrop.png"
            alt="Photo"
            fill
            className="rounded-lg object-cover mx-auto z-[-1]"
          />
        </AspectRatio>
      </div>
      <div className="">
        <div className="flex translate-y-[-13%] justify-center gap-10">
          <Image
            src="/northgardCover.png"
            alt="photo"
            width={300}
            height={450}
            className="rounded-lg"
          />
          <div className="flex flex-col w-1/3 gap-3">
            <h2 className="text-5xl">Northgard</h2>
            <p>2019 Produced by Studio name</p>
            <p>Catch Phase</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam culpa deserunt voluptatum incidunt error voluptates
              quam veritatis harum laudantium debitis, repudiandae optio
              aspernatur asperiores in, non voluptatibus nisi ut rerum?
            </p>
          </div>
          <GameInfoCard />
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
    </div>
  );
};

export default GamePage;
