import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { type AppRouterInstance } from "next/dist/shared/lib/app-router-context";

interface PaginationButtonProps {
  isPending: boolean;
  offset: number;
  pathname: string;
  startTransition: (callback: () => void) => void;
  router: AppRouterInstance;
  pageNumber: string | number;
  createQueryString: (params: Record<string, string | number | null>) => string;
  sort: string;
  gamesLength: number;
  page: string;
}

const PaginationButton = ({
  isPending,
  offset,
  pathname,
  startTransition,
  router,
  pageNumber,
  createQueryString,
  sort,
  page,
  gamesLength,
}: PaginationButtonProps) => {
  return (
    <div className="flex flex-col items-center justify-center  gap-2">
      <div className="flex gap-5">
        {Number(pageNumber) > 1 ? (
          <Button
            variant="default"
            size="sm"
            className="w-10 h-10"
            disabled={isPending}
            onClick={() => {
              startTransition(() => {
                pageNumber = Number(pageNumber) - 1;
                router.push(
                  `${pathname}?${createQueryString({
                    offset: Number(offset) - 20,
                  })}`
                );
              });
            }}
          >
            <Icons.chevronLeft className="w-8 h-8" aria-hidden="true" />
            <span className="sr-only">Previous page</span>
          </Button>
        ) : null}
        <Button
          variant="default"
          size="sm"
          className="h-10 w-10"
          onClick={() => {
            startTransition(() => {
              pageNumber = Number(pageNumber) + 1;
              router.push(
                `${pathname}?${createQueryString({
                  offset: Number(offset) + 20,
                })}`
              );
            });
          }}
          disabled={isPending || gamesLength < 20}
        >
          <Icons.chevronRight className="h-8 w-8" aria-hidden="true" />
          <span className="sr-only">Next page</span>
        </Button>
      </div>
    </div>
  );
};

export default PaginationButton;
