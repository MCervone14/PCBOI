"use client";

import { useEffect, useRef, useState } from "react";
import ShowMoreButton from "./ShowMoreButton";
import SteamReviewCard from "./cards/SteamReviewCard";

const ReviewCardWrapper = (review: any) => {
  const [showMore, setShowMore] = useState(false);

  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (elementRef.current?.clientHeight! > 400) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  }, []);

  return (
    <div>
      <div
        key={review.username}
        className={`relative overflow-hidden ${
          showMore ? "h-[350px] mb-4" : "h-auto"
        }`}
        ref={elementRef}
      >
        <SteamReviewCard key={review.username} {...review} />
        {showMore && (
          <ShowMoreButton showMore={showMore} setShowMore={setShowMore} />
        )}
      </div>
    </div>
  );
};

export default ReviewCardWrapper;
