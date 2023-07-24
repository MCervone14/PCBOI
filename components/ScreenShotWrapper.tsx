"use client";

import { useState } from "react";
import ShowMoreButton from "./ShowMoreButton";
import ScreenShotCard from "./cards/ScreenShotCard";

interface ScreenShotWrapperProps {
  screenshots: string[];
}

const ScreenShotWrapper = ({ screenshots }: ScreenShotWrapperProps) => {
  const [showMore, setShowmore] = useState(false);
  return (
    <div
      className={`flex flex-wrap w-[400px] justify-center items-center gap-2 overflow-hidden relative ${
        showMore ? "h-auto" : "h-[210px]"
      }`}
    >
      {screenshots.map((screenshot: string, idx: number) => (
        <ScreenShotCard screenshot={screenshot} key={idx} />
      ))}
      <ShowMoreButton setShowMore={setShowmore} showMore={showMore} />
    </div>
  );
};

export default ScreenShotWrapper;
