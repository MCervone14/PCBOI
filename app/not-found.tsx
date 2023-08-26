"use client";

import Shell from "@/components/Shell";
import TitleHeader from "@/components/TitleHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <Shell className="space-y-20 flex flex-col justify-center items-center h-screen w-screen">
      <TitleHeader title="Uh Oh, Looks like this page doesn't exist!" />
      <Button
        className="text-2xl hover:text-pink-500"
        onClick={() => router.push("/")}
      >
        Want to navigate to the home page?
      </Button>
    </Shell>
  );
};

export default NotFoundPage;
