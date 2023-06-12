import SectionList from "@/components/SectionList";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const getFeaturedGames = async () => {
  // const res = await fetch(`${process.env.API_URL_BASE}/games?featured=true`)
  // const data = await res.json()
  // return data
};

export default async function Home() {
  return (
    <div className="container">
      <div>
        <div className="relative image-container">
          <AspectRatio ratio={19.5 / 9}>
            <Image
              src="/starfield.jpg"
              alt="Photo"
              fill
              className="rounded-lg object-cover mx-auto z-[-1]"
            />
          </AspectRatio>
        </div>
        <div className="flex flex-col items-center mx-auto w-full mb-8">
          <h2 className="text-[1rem] lg:text-5xl pb-3 font-bold text-center text-white">
            Everything Gaming, All in One Place.
            <br />
            Search for Games and Reviews.
          </h2>
        </div>
        <div className="mb-8">
          <SectionList
            sectionTitle="Featured"
            category="game"
            games={[
              "dffdasfdf",
              "dafsdfsdf",
              "sdfsdfsdf",
              "sdfsdfsdf",
              "sdfsdfsdf",
            ]}
          />
        </div>
        <div className="mb-8">
          <SectionList
            sectionTitle="Trending"
            category="game"
            games={[
              "dffdasfdf",
              "dafsdfsdf",
              "sdfsdfsdf",
              "sdfsdfsdf",
              "sdfsdfsdf",
            ]}
          />
        </div>
        <div className="mb-8">
          <SectionList sectionTitle="New Reviews" category="review" />
        </div>
      </div>
    </div>
  );
}
