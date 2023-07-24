"use client";

import { useEffect, useState } from "react";
import ShowMoreButton from "./ShowMoreButton";

interface DescriptionProps {
  gameData: string[];
}

const Description = ({ gameData }: DescriptionProps) => {
  // const [showMore, setShowMore] = useState(false);

  // useEffect(() => {
  //   const aboutTheGameDiv =
  //     document.getElementById("about-the-game-div")?.clientHeight;
  //   if (aboutTheGameDiv && aboutTheGameDiv > 1500) {
  //     setShowMore(true);
  //   } else {
  //     setShowMore(false);
  //   }
  // }, []);

  return (
    <div className="relative">
      <div
        id="about-the-game-div"
        dangerouslySetInnerHTML={{ __html: gameData }}
        className={`article-content 
          
          `}
        // Might use this later
        // showMore ? "h-fit overflow-visible" : "h-[1500px] overflow-hidden"
      />
      {/* {!showMore && (
        <ShowMoreButton setShowMore={setShowMore} showMore={showMore} />
      )} */}
    </div>
  );
};

export default Description;
