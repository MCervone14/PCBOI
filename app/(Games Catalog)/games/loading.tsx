import { Icons } from "@/components/Icons";
import Shell from "@/components/Shell";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const GamesLoadingPage = () => {
  return (
    <Shell className="space-y-2">
      <Skeleton className="h-10 w-1/5 bg-pink-500" />
      <Skeleton className="h-5 w-1/6 bg-pink-500" />
      <div className="flex flex-col space-y-6">
        <div className="flex gap-4 mt-6">
          <Skeleton className="h-10 w-[5%] rounded-full bg-pink-500" />
          <Skeleton className="h-10 w-[5%] rounded-full bg-pink-500" />
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {Array.from({ length: 20 }).map((_, idx) => (
            <Card
              key={idx}
              className="rounded-sm w-[264px] h-[374px] animate-pulse opacity-75"
            >
              <div className="flex h-full items-center justify-center bg-secondary">
                <Icons.placeholder className="h-9 w-9" aria-hidden="true" />
              </div>
            </Card>
          ))}
        </div>
        <div className="flex gap-4 mt-6 justify-center items-center">
          <Skeleton className="h-10 w-16 rounded-full bg-pink-500" />
          <Skeleton className="h-10 w-16 rounded-full bg-pink-500" />
        </div>
      </div>
    </Shell>
  );
};

export default GamesLoadingPage;
