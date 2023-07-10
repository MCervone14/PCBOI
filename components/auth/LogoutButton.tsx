"use client";

import { useRouter } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import useMounted from "@/hooks/useMounted";
import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Icons } from "@/components/Icons";
import { useTransition } from "react";

const LogoutButton = () => {
  const router = useRouter();
  const mounted = useMounted();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex w-full items-center space-x-2">
      {mounted ? (
        <SignOutButton
          signOutCallback={() =>
            startTransition(() => {
              router.push("${window.location.origin}/");
            })
          }
        >
          <Button
            aria-label="logout"
            size="sm"
            className="w-full"
            disabled={isPending}
          >
            {isPending && (
              <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
            )}
            Logout
          </Button>
        </SignOutButton>
      ) : (
        <Skeleton
          className={cn(
            buttonVariants({ size: "sm" }),
            "w-full bg-muted text-muted-foreground"
          )}
        >
          Logout
        </Skeleton>
      )}
      <Button
        aria-label="go back to the previous page"
        variant="outline"
        size="sm"
        onClick={() => router.back()}
        disabled={isPending}
        className="w-full"
      >
        Go Back
      </Button>
    </div>
  );
};

export default LogoutButton;
