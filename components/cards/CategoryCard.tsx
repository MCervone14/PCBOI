import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Shell from "../Shell";
import Link from "next/link";

interface CategoryCardProps {
  subcategory: {
    title: string;
    image?: string;
    id: string;
    genre: string;
  };
  className?: string;
}

const CategoryCard = ({ subcategory, className }: CategoryCardProps) => {
  return (
    <Button
      className={cn(
        `group w-full h-[300px] p-[4px] bg-gradient-to-r from-pink-700 transition-all duration-400 hover:transform hover:scale-95 relative 
          cursor-pointer`,
        className
      )}
    >
      <Link
        href={`/games/${subcategory.genre}?id=${subcategory.id}`}
        prefetch={false}
        className="relative w-full h-full flex justify-center items-center"
      >
        <h2 className="text-primary z-50 font-bold text-2xl absolute ">
          {subcategory.title}
        </h2>
        {subcategory.image && (
          <Image
            src={subcategory.image}
            alt={`category ${subcategory.title}`}
            fill
            className="brightness-[.2] rounded object-cover absolute opacity-95"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </Link>
    </Button>
  );
};

export default CategoryCard;
