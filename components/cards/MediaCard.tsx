"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Icons } from "../Icons";

interface MediaCardProps {
  movie?: string;
}

const MediaCard = ({ movie }: MediaCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const movieUrl = movie?.replace(".184x123.jpg", "480.webm");

  const handleThumbnailClick = () => {
    setIsPlaying(true);
  };

  const handleCloseClick = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative mb-2" id="media">
      <div>
        <Icons.playCircle
          onClick={handleThumbnailClick}
          className="w-10 h-10 absolute fill-pink-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hover:scale-105 cursor-pointer"
        />
        <Image
          src={movie || ""}
          alt="Video Thumbnail"
          className={`min-h-[123px] min-w-[184px] ${
            isPlaying ? "hidden" : "visible"
          }`}
          width={184}
          height={123}
        />
      </div>
      {isPlaying && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div>
            <Button
              variant="ghost"
              className="fixed top-[20%] right-[25%] transform -translate-x-1/2 -translate-y-1/2 m-4 text-white bg-transparent border-0"
              onClick={handleCloseClick}
            >
              Close
            </Button>
            <video
              src={movieUrl}
              controls
              autoPlay
              className="fixed left-50 top-50 transform -translate-x-1/2 -translate-y-1/2"
            >
              Your browser does not support the video.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaCard;
