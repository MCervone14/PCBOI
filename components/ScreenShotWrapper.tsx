"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ShowMoreButton from "./ShowMoreButton";
import ScreenShotCard from "./cards/ScreenShotCard";
import { Card } from "./ui/card";

interface ScreenShotWrapperProps {
  screenshots: string[];
}

const ScreenShotWrapper = ({ screenshots }: ScreenShotWrapperProps) => {
  const [showMore, setShowMore] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current?.clientHeight! > 210) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  }, []);

  return (
    <Card
      className={`flex flex-wrap w-full md:w-[400px] justify-center items-center gap-2 overflow-hidden relative py-2 ${
        showMore ? "h-[210px]" : "h-auto"
      }`}
      ref={elementRef}
    >
      {screenshots.map((screenshot: string, idx: number) => (
        <ScreenShotCard screenshot={screenshot} key={idx} />
      ))}
      {showMore && (
        <ShowMoreButton setShowMore={setShowMore} showMore={showMore} />
      )}
    </Card>
  );
};

export default ScreenShotWrapper;
