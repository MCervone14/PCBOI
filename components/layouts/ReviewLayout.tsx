import ReviewSearch from "../search/ReviewSearch";
import Shell from "../Shell";
import TitleHeader from "../TitleHeader";

const categories = [
  {
    title: "All-Reviews",
  },
  {
    title: "Strategy",
  },
  {
    title: "Action",
  },
  {
    title: "Adventure",
  },
  {
    title: "Massively-Multiplayer",
  },
  {
    title: "Casual",
  },
  {
    title: "Indie",
  },
  {
    title: "Role-Playing",
  },
  {
    title: "Sports",
  },
  {
    title: "Simulation",
  },
  {
    title: "Early-Access",
  },
];

const ReviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Shell>
      <TitleHeader title="Reviews" description="Reviews of Popular PC titles" />
      <div className="flex flex-col justify-center items-center gap-4 mt-28 mx-auto">
        <ReviewSearch />
      </div>
      <div className="flex flex-col justify-center gap-3">{children}</div>
    </Shell>
  );
};
export default ReviewLayout;
