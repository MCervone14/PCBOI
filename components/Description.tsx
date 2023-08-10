"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ShowMoreButton from "./ShowMoreButton";
import Image from "next/image";

interface DescriptionProps {
  aboutTheGame: string[];
  headerImage: string | null;
  title: string;
}

const Description = ({
  aboutTheGame,
  headerImage,
  title,
}: DescriptionProps) => {
  const [showMore, setShowMore] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current?.clientHeight! > 1500) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  }, []);

  return (
    <div className="relative">
      <Image
        src={headerImage!}
        alt={title}
        width={400}
        height={400}
        className="object-cover mt-2 w-full md:hidden"
      />
      <div
        ref={elementRef}
        dangerouslySetInnerHTML={{ __html: aboutTheGame }}
        className={`article-content ${
          showMore ? "h-[1500px] overflow-hidden" : "h-auto overflow-visible"
        }
          `}
      />
      {showMore && (
        <ShowMoreButton setShowMore={setShowMore} showMore={showMore} />
      )}
    </div>
  );
};

export default Description;
