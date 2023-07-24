import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const ShowMoreButton = ({
  showMore,
  setShowMore,
  className,
}: {
  showMore: boolean;
  setShowMore: (arg: boolean) => void;
  className?: string;
}) => {
  return (
    <div className="">
      {!showMore ? (
        <Button
          id="show-more"
          variant="link"
          className={cn(
            `text-xs absolute bottom-0 right-0 bg-transparent text-pink-500 bg-blue-950 w-full hover:bg-blue-900`,
            className
          )}
          onClick={() => setShowMore(true)}
        >
          Show More
        </Button>
      ) : null}
    </div>
  );
};

export default ShowMoreButton;
