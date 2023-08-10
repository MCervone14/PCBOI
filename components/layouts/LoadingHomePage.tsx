import { Card } from "@/components/ui/card";
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
      <div className="flex flex-col items-center mx-auto w-full mb-8">
        <div className="bg-pink-700 w-full rounded-lg shadow-2xl border border-primary">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-2 p-2.5">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Card className="h-[600px] w-full rounded-sm mx-auto" key={idx}>
                <Skeleton>
                  {Array.from({ length: 10 }).map((_, idx) => (
                    <div
                      className="border w-full flex flex-col items-center justify-around sm:flex-row h-[60px]"
                      key={idx}
                    >
                      <div className="p-0 py-1 w-1/3 max-w-[149.5px] bg-sky-500 h-[40px] rounded-lg mx-2 ">
                        {/* game image */}
                      </div>
                      <div className="w-[400px] hover:text-pink-500 ">
                        {Array.from({ length: 3 }).map((_, idx) => (
                          <div
                            className="text-center sm:w-full bg-pink-500 mb-2 h-2 px-2"
                            key={idx}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </Skeleton>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}
