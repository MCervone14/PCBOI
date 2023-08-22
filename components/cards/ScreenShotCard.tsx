"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

interface ScreenShotProps {
  screenshot?: string;
}

const ScreenShotCard = ({ screenshot }: ScreenShotProps) => {
  const [isActive, setIsActive] = useState(false);
  const biggerScreenShot = screenshot?.replace(".116x65.jpg", ".1920x1080.jpg");
  const handleThumbnailClick = () => {
    setIsActive(true);
  };

  const handleCloseClick = () => {
    setIsActive(false);
  };

  return (
    <div className="relative" id="screenshots">
      <Image
        src={screenshot || ""}
        alt="Screenshot Thumbnail"
        className={`min-w-[128px] min-h-[65px] cursor-pointer ${
          isActive ? "hidden" : "block"
        }`}
        width={128}
        height={65}
        onClick={handleThumbnailClick}
      />
      {isActive && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div>
            <Button
              variant="ghost"
              className="fixed top-[10%] right-[16%] transform -translate-x-1/2 -translate-y-1/2 m-4 text-white bg-transparent border-0"
              onClick={handleCloseClick}
            >
              Close
            </Button>

            <Image
              src={biggerScreenShot || ""}
              alt="Bigger Screenshot"
              className="fixed left-50 top-50 transform -translate-x-1/2 -translate-y-1/2"
              width={1200}
              height={675}
              placeholder="blur"
              blurDataURL={"/placeholder-image.webp"}
              aria-hidden={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenShotCard;
