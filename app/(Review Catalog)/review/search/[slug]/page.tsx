import { allDocs } from "@/.contentlayer/generated";
import TitleHeader from "@/components/TitleHeader";
import ReviewCard from "@/components/cards/ReviewCard";

interface SearchProps {
  params: {
    slug: string;
  };
}

const getSearchReviews = async (searchTerm: string) => {
  const reviews = await allDocs
    .filter((doc) => doc.slugAsParams.includes(searchTerm))
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));

  return reviews;
};

const SearchPage = async ({ params }: SearchProps) => {
  const reviews = await getSearchReviews(params.slug);

  if (reviews.length === 0) {
    return (
      <div className="w-1/2 mx-auto text-center flex flex-col justify-center text-lg mb-2">
        <p>
          Sorry! There are no reviews for this search. Please try a different
          search!
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
        description={`Reviews based on ${params.slug} search`}
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

export default SearchPage;
