import { Doc } from "@/.contentlayer/generated";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import dayjs from "dayjs";

const ReviewCard = (doc: Doc) => {
  return (
    <div className="flex gap-10 items-center overflow-auto">
      <Link href={`${doc.slug}`}>
        <Card className="border-2 hover:border-yblue">
          <Image
            className="aspect-square object-cover rounded-lg  min-w-[150px] cursor-pointer"
            src="/dummyPic.png"
            alt="Game Art Cover"
            width={150}
            height={150}
          />
        </Card>
      </Link>
      <div className="flex flex-col gap-2 md:gap-6">
        <div className="flex flex-between justify-between">
          <div className="flex items-center gap-4">
            <Link href={`${doc.slug}`} className="hover:text-yblue">
              <h3 className="text-3xl">{doc.title}</h3>
            </Link>
            <span>{doc.new && <Badge className="bg-yblue">New</Badge>}</span>
          </div>
          <div className="flex justify-center items-center gap-4">
            {doc.tags.map((tag, idx) => (
              <>
                <Link href={`/reviews/tag/${tag}`} key={idx}>
                  <Badge className="cursor-pointer">{tag}</Badge>
                </Link>
                <Separator orientation="vertical" />
              </>
            ))}
          </div>
        </div>
        <p className="line-clamp-3 text-lg w-3/4 hidden  md:block">
          {doc.description}
        </p>
        <div className="flex  gap-10">
          <p className="text-sm">By Michael Cervone</p>
          <p className="text-sm">
            <span className="opacity-50 mr-3">Published on:</span>
            {dayjs(doc.publishedDate).format("MMMM D, YYYY")}
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ReviewCard;
