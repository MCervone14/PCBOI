"use client";
import { Gamepad2, Plus } from "lucide-react";

const GameLibrary = () => {
  const onClick = () => {
    //Handle upload games.
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <Gamepad2 className="text-neutral-400" size={24} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
          <Plus
            onClick={onClick}
            size={18}
            className="text-neutral-400 cursor-pointer hover:text-white transition"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">Under Construction</div>
    </div>
  );
};

export default GameLibrary;
