"use client";
import React from "react";
import { Button } from "../ui/button";

interface CategoryCardProps {
  title: string;
}

const CategoryCard = ({ title }: CategoryCardProps) => {
  return (
    <Button
      className={`flex group w-[200px] h-[50px] bg-gradient-to-r from-yblue transition-all duration-400 hover:transform hover:scale-95 relative cursor-pointer
       `}
    >
      {title}
    </Button>
  );
};

export default CategoryCard;
