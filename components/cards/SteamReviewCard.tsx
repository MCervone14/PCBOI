import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../Icons";

const SteamReviewCard = (review: any) => {
  return (
    <Card className={`gap-2 mb-5 w-full h-auto`}>
      <CardHeader className="bg-pink-500 bg-muted p-2 w-full">
        <div className="flex items-center ">
          <Link
            href={review.href}
            className="mr-2 flex-col flex justify-center "
          >
            <div className="hover:border-yblue w-fit">
              <Image
                className="object-cover align-left cursor-pointer"
                src={`${review.avatar.src}`}
                alt="player avatar"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <div className="w-full flex flex-col">
            <p className="w-1/2 flex-1">{review.username}</p>
            <small className="opacity-75">{review.hours_played}</small>
            <p className="text-3xl flex gap-5 items-center">
              {review.recommendation}
              {review.recommendation === "Not Recommended" ? (
                <span>
                  <Icons.thumbsDown className="w-6 h-6 fill-red-700" />
                </span>
              ) : (
                <span>
                  <Icons.thumbsUp className="w-6 h-6 fill-green-700" />
                </span>
              )}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div dangerouslySetInnerHTML={{ __html: review.review_text }} />
      </CardContent>
      <CardFooter>
        <div className="flex gap-10">
          <div
            dangerouslySetInnerHTML={{ __html: review.review_date }}
            className="text-sm opacity-50"
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default SteamReviewCard;
