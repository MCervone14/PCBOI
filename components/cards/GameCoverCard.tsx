import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const GameCoverCard = () => {
  return (
    <Link
      href={`/game/INSERTSLUGHERE`}
      passHref
      className="flex group flex-col items-center justify-center rounded-md overflow-hidden h cursor-pointer
      "
    >
      <Card className="relative border-4 aspect-auto w-full h-full rounded-md overflow-hidden hover:border-yblue">
        <Image
          src="/dummyPic.png"
          alt="game art cover"
          width={300}
          height={400}
          className="object-cover"
        />
      </Card>
    </Link>
  );
};

export default GameCoverCard;
