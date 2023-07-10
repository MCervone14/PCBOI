import { allDocs } from "@/.contentlayer/generated";
import ReviewCard from "@/components/cards/ReviewCard";
import React from "react";

interface TagProps {
  params: {
    slug: string;
  };
}

const getTagReviews = async (tag: string) => {
  const reviews = await allDocs
    .filter((doc) => doc.tags.includes(tag))
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));

  return reviews;
};

const page = async ({ params }: TagProps) => {
  const reviews = await getTagReviews(params.slug);

  return (
    <div className="flex flex-col justify-center mt-10 gap-3">
      {reviews.map((doc, idx) => (
        <>
          <ReviewCard key={idx} {...doc} />
        </>
      ))}
    </div>
  );
};

export default page;
