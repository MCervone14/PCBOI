import { Doc } from "@/.contentlayer/generated";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import Balancer from "react-wrap-balancer";
import dayjs from "dayjs";

const ReviewCard = (doc: Doc) => {
  return (
    <div className="flex-col flex md:flex-row gap-10 mx-auto mb-5">
      <Link href={`${doc.slug}`} className="min-w-[150px] my-auto">
        <div className="border-2 hover:border-yblue w-fit rounded-md">
          <Image
            className="aspect-square object-cover rounded-lg align-left cursor-pointer"
            src="/dummyPic.png"
            alt="Game Art Cover"
            width={150}
            height={150}
          />
        </div>
      </Link>
      <div className="flex flex-col gap-2 md:gap-6">
        <div className="flex flex-between gap-3 justify-between">
          <div className="flex items-center gap-4">
            <Link href={`${doc.slug}`} className="hover:text-yblue">
              <h3 className="text-3xl">
                <Balancer>{doc.title}</Balancer>
              </h3>
            </Link>
            {doc.new && <Badge className="bg-yblue">New</Badge>}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {doc.tags.map((tag, idx) => (
            <>
              <Badge className="cursor-pointe bg-[#FF75E6] ">
                <Link href={`/reviews/tag/${tag}`} key={idx}>
                  {tag}
                </Link>
              </Badge>
            </>
          ))}
        </div>
        <div className="line-clamp-3 text-lg w-3/4 hidden  md:block">
          <Balancer ratio={0.6}>{doc.description}</Balancer>
        </div>
        <div className="flex gap-10">
          <div className="text-sm">
            <Balancer ratio={0.6}>By Michael Cervone</Balancer>
          </div>
          <div className="text-sm">
            <span className="opacity-50 mr-3">Published on:</span>
            <Balancer ratio={0.6}>
              {dayjs(doc.publishedDate).format("MMMM D, YYYY")}
            </Balancer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
