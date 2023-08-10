import { Card } from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

interface GameCoverCardProps {
  id: string;
  title: string;
  image: string;
}

const HomeCoverCard = ({ game }: any) => {
  return (
    <Link
      href={{
        pathname: `/game/${game.id}`,
        query: { title: game.name },
      }}
      prefetch={false}
      passHref
      className="w-full rounded-md cursor-pointer
       "
    >
      <Card
        className={`relative w-[460px] h-[215px] mr-4 border-2 rounded-md hover:border-yblue`}
      >
        <Image
          src={game.header_image || "/dummyPic.png"}
          alt={game.name}
          fill
          className="object-cover w-auto h-auto rounded-l-md"
        />
      </Card>
    </Link>
  );
};

export default HomeCoverCard;
