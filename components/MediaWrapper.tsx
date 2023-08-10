"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ShowMoreButton from "./ShowMoreButton";
import MediaCard from "./cards/MediaCard";
import { Card } from "./ui/card";

interface MediaWrapperProps {
  movies: string[];
}

const MediaWrapper = ({ movies }: MediaWrapperProps) => {
  const [showMore, setShowMore] = useState(false);

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current?.clientHeight! > 175) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  }, []);
  return (
    <Card
      className={`flex flex-wrap w-full md:w-[400px] overflow-hidden gap-2 justify-center mb-2 relative pt-2 ${
        showMore ? "h-[175px]" : "h-auto"
      }`}
      ref={elementRef}
    >
      {movies.map((movie: string, idx: number) => (
        <MediaCard movie={movie} key={idx} />
      ))}
      {showMore && (
        <ShowMoreButton
          setShowMore={setShowMore}
          showMore={showMore}
          className=""
        />
      )}
    </Card>
  );
};

export default MediaWrapper;
