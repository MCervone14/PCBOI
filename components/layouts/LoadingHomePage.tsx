import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Icons } from "@/components/Icons";
import Shell from "@/components/Shell";

export default function HomePageLoading() {
  return (
    <Shell>
      <Card className="rounded-sm h-[600px] animate-pulse bg-muted-foreground opacity-75 w-full mb-8">
        <div className="flex h-full items-center justify-center bg-secondary ">
          <Icons.placeholder
            className="h-9 w-9 text-muted-foreground"
            aria-hidden="true"
          />
        </div>
      </Card>
      <div className="flex flex-col items-center mx-auto w-full gap-2 mb-8">
        <Skeleton className="h-8 w-1/2 mx-auto bg-pink-500" />
        <Skeleton className="h-8 w-1/2 mx-auto bg-pink-500 " />
      </div>
      <div className="flex flex-col gap-2 mb-8">
        <Skeleton className="h-10 w-1/6 bg-pink-500" />
        <Skeleton className="h-2 w-full bg-white" />
        <div className="flex flex-wrap justify-center gap-4 lg:gap-11">
          {Array.from({ length: 25 }).map((_, idx) => (
            <Card
              key={idx}
              className="rounded-sm h-[87px] w-[229px] flex justify-center items-center opacity-75 animate-pulse mb-8"
            >
              <Icons.placeholder
                className="h-9 w-9 text-muted-foreground"
                aria-hidden="true"
              />
            </Card>
          ))}
        </div>
        <Skeleton className="h-10 w-1/6 bg-pink-500" />
        <Skeleton className="h-2 w-full bg-white" />
        <div className="flex flex-wrap justify-center gap-4 lg:gap-11">
          {Array.from({ length: 10 }).map((_, idx) => (
            <Card
              key={idx}
              className="rounded-sm h-[87px] w-[229px] flex justify-center items-center opacity-75 animate-pulse mb-8"
            >
              <Icons.placeholder
                className="h-9 w-9 text-muted-foreground"
                aria-hidden="true"
              />
            </Card>
          ))}
        </div>
        <Skeleton className="h-10 w-1/6 bg-pink-500 mx-auto" />
        <Skeleton className="h-2 w-full bg-white" />
        <Card className="rounded-sm h-[300px] animate-pulse bg-muted-foreground opacity-75 w-full mb-8">
          <div className="flex h-full items-center justify-center bg-secondary ">
            <Icons.placeholder
              className="h-9 w-9 text-muted-foreground"
              aria-hidden="true"
            />
          </div>
        </Card>
        <Skeleton className="h-10 w-1/6 bg-pink-500 mb-2" />
        <Skeleton className="h-2 w-full bg-white mb-2" />

        <div className="mb-8">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Card
              key={idx}
              className="rounded-sm flex mb-2 opacity-75 animate-pulse w-1/2"
            >
              <CardHeader className="border-b p-0 w-1/3">
                <div className="flex h-full items-center justify-center bg-secondary">
                  <Icons.placeholder
                    className="h-9 w-9 text-muted-foreground"
                    aria-hidden="true"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col opacity-75 p-2 w-full">
                <Skeleton className="h-8 w-1/2 bg-pink-500" />
                <div className="flex my-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Skeleton
                      key={idx}
                      className="h-3 w-[5%] rounded-full bg-pink-500 mr-2"
                    />
                  ))}
                </div>
                <Skeleton className="h-24 w-full bg-pink-500" />
                <div className="flex my-2 gap-2">
                  <Skeleton className="h-2 w-1/6 rounded-sm bg-pink-500" />
                  <Skeleton className="h-2 w-1/6 rounded-sm bg-pink-500" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Shell>
  );
}
