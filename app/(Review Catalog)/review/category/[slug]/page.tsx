import { allDocs } from "@/.contentlayer/generated";
import Shell from "@/components/Shell";
import TitleHeader from "@/components/TitleHeader";
import ReviewCard from "@/components/cards/ReviewCard";

interface CatProps {
  params: {
    slug: string;
  };
}

const getCategoryReviews = async (category: string) => {
  const reviews = await allDocs
    .filter((doc) => doc.categories.includes(category))
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));

  return reviews;
};

const categoryPage = async ({ params }: CatProps) => {
  const reviews = await getCategoryReviews(params.slug);

  if (reviews.length === 0) {
    return (
      <div className="w-3/4 mx-auto text-center flex flex-col justify-center text-lg mb-2">
        <p>
          Sorry! There are no reviews for this category at this time. Please try
          a different category!
        </p>
        <p>
          In addition, I am still working on bringing more reviews in the future
          so stay tuned!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full justify-center container">
      <TitleHeader
        title={`${params.slug} Game Reviews`}
        description={`Reviews based on ${params.slug} Category`}
        className="mb-20"
      />
      {reviews.map((doc, idx) => (
        <>
          <ReviewCard key={idx} {...doc} />
        </>
      ))}
    </div>
  );
};

export default categoryPage;
