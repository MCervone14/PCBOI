"use client";

import { useState } from "react";
import ShowMoreButton from "./ShowMoreButton";
import SteamReviewCard from "./cards/SteamReviewCard";
import { type Review } from "@prisma/client";

interface ReviewCardWrapperProps {
  reviewData: Review[];
}

const ReviewCardWrapper = ({ reviewData }: ReviewCardWrapperProps) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      {reviewData.map((review: any) => (
        <>
          <div>
            <div
              key={review.username}
              className={`relative overflow-hidden ${
                showMore ? "h-auto" : "h-[550px]"
              }`}
            >
              <SteamReviewCard key={review.username} {...review} />
              <ShowMoreButton showMore={showMore} setShowMore={setShowMore} />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ReviewCardWrapper;
