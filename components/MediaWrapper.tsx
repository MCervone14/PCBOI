"use client";

import { useState } from "react";
import ShowMoreButton from "./ShowMoreButton";
import MediaCard from "./cards/MediaCard";

interface MediaWrapperProps {
  movies: string[];
}

const MediaWrapper = ({ movies }: MediaWrapperProps) => {
  const [showMore, setShowmore] = useState(false);
  return (
    <div
      className={`flex flex-wrap w-[400px] overflow-hidden gap-2 justify-center mb-2 relative ${
        showMore ? "h-fit" : "h-[175px]"
      }`}
    >
      {movies.map((movie: string, idx: number) => (
        <MediaCard movie={movie} key={idx} />
      ))}
      <ShowMoreButton
        setShowMore={setShowmore}
        showMore={showMore}
        className=""
      />
    </div>
  );
};

export default MediaWrapper;
