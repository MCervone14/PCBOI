import GameCoverCard from "./cards/GameCoverCard";
import ReviewCard from "./cards/ReviewCard";
import { allDocs } from "@/.contentlayer/generated";

interface SectionListProps {
  sectionTitle: string;
  category: string;
  games?: string[];
}

const SectionList = ({ sectionTitle, category, games }: SectionListProps) => {
  if (category === "game") {
    return (
      <>
        <h2 className="uppercase font-bold">{sectionTitle}</h2>
        <hr className="mb-2" />
        <div className="flex gap-4">
          {games?.map((game, idx) => (
            <GameCoverCard key={idx} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className="uppercase font-bold">{sectionTitle}</h2>
      <hr className="mb-4" />
      <div className="flex-wrap flex gap-4">
        {allDocs
          .map((doc, idx) => <ReviewCard key={idx} {...doc} />)
          .slice(0, 6)}
      </div>
    </>
  );
};

export default SectionList;
