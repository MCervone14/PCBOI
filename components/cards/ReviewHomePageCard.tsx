"use client";
import Link from "next/link";
import Image from "next/image";
import { allDocs } from "@/.contentlayer/generated";
import { useState } from "react";
import { Badge } from "../ui/badge";
import TitleHeader from "../TitleHeader";

const ReviewHomePageCard = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="w-[1200px] max-w-full">
      <ul className="flex h-[200px] gap-[1.5%] group">
        {allDocs.map((review, index) => (
          <li
            onClick={() => setActiveItem(index)}
            aria-current={activeItem === index}
            className={`w-[8%] bg-transparent [&[aria-current="true"]]:w-[48%] relative hover:w-[12%] 
              transition-[width] [&:not(:hover),&:not(:last),&:not(:first)]:group-hover:w-[7%]
              before:absolute before:bottom-0 before:top-0 before:left-[-10px] before:right-[-10px]  
          
              `}
            key={review._id}
          >
            <div className="overflow-hidden relative h-full w-full">
              <Image
                src={review.image}
                alt={review.title}
                fill
                className="object-cover rounded-2xl absolute h-[640px] w-[590px] brightness-50"
              />
              <div
                className={`
                    "left-8 top-8 w-[590px] p-4 transition-[transform,opacity] md:absolute md:p-0",
                    ${
                      activeItem === index
                        ? "md:translate-x-0 md:opacity-100"
                        : "md:translate-x-4 md:opacity-0"
                    }`}
              >
                <p className="text-lg uppercase text-primary md:text-3xl">
                  <span className="bg-green-600 rounded-lg mr-2 px-2">
                    {review.review_type}
                  </span>
                  {review.title}
                </p>
                <div className="text-lg font-bold md:text-4xl flex gap-2">
                  {review.tags.map((tag, idx) => (
                    <Link href={`/reviews/tag/${tag}`} key={idx}>
                      <Badge className="cursor-pointer bg-[#FF75E6]">
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewHomePageCard;
