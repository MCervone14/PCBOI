import ReviewCard from "@/components/cards/ReviewCard";
import { allDocs } from "@/.contentlayer/generated";

const getReviews = async () => {
  const reviews = await allDocs
    .filter((doc) => doc.published === true)
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));

  return reviews;
};

const ReviewsPage = async () => {
  const reviews = await getReviews();
  return (
    <>
      {reviews.map((doc, idx) => (
        <>
          <ReviewCard key={idx} {...doc} />
        </>
      ))}
    </>
  );
};

export default ReviewsPage;
