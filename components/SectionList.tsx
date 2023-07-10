import { Separator } from "@/components/ui/separator";
import Carousel from "./Carousel";
import HomeCoverCard from "./cards/HomeCoverCard";
import ReviewCard from "./cards/ReviewCard";
import { allDocs } from "@/.contentlayer/generated";
import { cn } from "@/lib/utils";
import { Game } from "@/types";
import NewCarousel from "./cards/ReviewHomePageCard";
import ExperimentalCard from "./cards/ExperimentalCard";

interface SectionListProps {
  sectionTitle: string;
  category: string;
  games?: any;
  className?: string;
}

const SectionList = ({
  sectionTitle,
  category,
  games,
  className,
}: SectionListProps) => {
  if (category === "game") {
    return (
      <div className={className}>
        <h2 className="uppercase font-bold">{sectionTitle}</h2>
        <Separator className="mb-2 bg-primary " />
        <div>
          <Carousel dragFree loop></Carousel>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <h2 className="uppercase font-bold">{sectionTitle}</h2>
      <Separator className="mb-2 bg-primary " />
      <div className="flex-wrap flex gap-4">
        {allDocs
          .map((doc, idx: number) => <ReviewCard key={idx} {...doc} />)
          .slice(0, 6)}
      </div>
    </div>
  );
};

export default SectionList;
