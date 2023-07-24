import ReviewCard from "@/components/cards/ReviewCard";
import { allDocs } from "@/.contentlayer/generated";
import Shell from "@/components/Shell";

const getReviews = async () => {
  const reviews = await allDocs
    .filter((doc) => doc.published === true)
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));

  return reviews;
};

const ReviewsPage = async () => {
  const reviews = await getReviews();
  return (
    <Shell className="space-y-20">
      {reviews.length > 0 ? (
        reviews.map((doc, idx) => <ReviewCard key={idx} {...doc} />)
      ) : (
        <div>There seems to be no reviews at this time.</div>
      )}
    </Shell>
  );
};

export default ReviewsPage;
