"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Icons } from "../Icons";

interface ScreenShotProps {
  screenshot?: string;
}

const ScreenShotCard = ({ screenshot }: ScreenShotProps) => {
  const [isActive, setIsActive] = useState(false);
  const biggerScreenShot = screenshot?.replace(".116x65.jpg", ".600x338.jpg");
  const handleThumbnailClick = () => {
    setIsActive(true);
  };

  const handleCloseClick = () => {
    setIsActive(false);
  };

  return (
    <div id="screenshots">
      <Image
        src={screenshot || ""}
        alt="Screenshot Thumbnail"
        className={`cursor-pointer ${isActive ? "hidden" : "block"}`}
        width={116}
        height={65}
        onClick={handleThumbnailClick}
      />
      {isActive && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="relative h-[375px] w-[600px]">
            <Image
              src={biggerScreenShot || ""}
              alt="Bigger Screenshot"
              className="fixed left-50 top-50"
              width={600}
              height={338}
              style={{ height: "auto", width: "auto" }}
              placeholder="blur"
              blurDataURL={"/placeholder-image.webp"}
              aria-hidden={true}
            />
            <Button
              variant="ghost"
              className="absolute top-0 right-0 z-1000 m-4 text-white bg-transparent border-0"
              onClick={handleCloseClick}
            >
              <Icons.close
                className="w-7 h-7 hover:opacity-90"
                aria-hidden={true}
              />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenShotCard;
