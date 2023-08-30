import Shell from "@/components/Shell";
import TitleHeader from "@/components/TitleHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Shell className="space-y-20 flex flex-col justify-center items-center h-screen w-screen">
      <TitleHeader title="Uh Oh, Looks like this page doesn't exist!" />
      <Link href="/">
        <Button className="text-2xl hover:text-pink-500">
          Want to navigate to the home page?
        </Button>
      </Link>
    </Shell>
  );
};

export default NotFoundPage;
