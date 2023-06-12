import CategoryCard from "../cards/CategoryCard";
import Link from "next/link";
import SearchComboBox from "../SearchComboBox";

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
    <section className="container relative">
      <div className="flex flex-col justify-center items-center gap-4 mt-28 mx-auto">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {categories.map((category, idx) => (
            <>
              <Link href={`/reviews/category/${category.title}`}>
                <CategoryCard key={idx} {...category} />
              </Link>
            </>
          ))}
        </div>
        <SearchComboBox />
      </div>
      <div className="flex flex-col justify-center mt-10 gap-3">{children}</div>
    </section>
  );
};
export default ReviewLayout;
