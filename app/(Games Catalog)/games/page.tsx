import Shell from "@/components/Shell";
import TitleHeader from "@/components/TitleHeader";
import Games from "@/components/Games";
import { gameCategories } from "@/config/games";
import { tagNumber } from "@/lib/utils";

export const metadata = {
  title: "PCBOI  |  All Games",
  description: "A list of all games in PCBOI's database.",
};

const fetchGames = async (
  endpoint: string,
  {
    offset = 0,
    sort,
    ratings_range,
    categories,
  }: {
    offset: number;
    sort: string;
    ratings_range: string;
    categories: string;
  }
) => {
  const ratingsRangeValues = ratings_range?.split(",");
  const minRating = ratingsRangeValues[0];
  const maxRating = ratingsRangeValues[1];
  let bodyString = "";

  if (categories === "") {
    bodyString = `f  id, slug, name, total_rating, external_games.uid, videos.*, external_games.category, release_dates.date,tags, release_dates.platform, total_rating_count, cover.url, first_release_date, genres.name; ${sort}; limit 20; offset ${offset}; 
    where total_rating != null & total_rating_count > 10 & total_rating >= ${minRating} & total_rating <= ${maxRating} & external_games.category = (1) & cover.url != null;`;
  } else {
    let tagValues = categories
      ?.split(".")
      .map((category) => tagNumber(1, +category))
      .join(",");
    bodyString = `f  id, slug, name, total_rating, external_games.uid, videos.*, external_games.category, release_dates.date,tags, release_dates.platform, total_rating_count, cover.url, first_release_date, genres.name; ${sort}; limit 20; offset ${offset}; 
      where total_rating != null & total_rating_count > 10 & total_rating >= ${minRating} & total_rating <= ${maxRating} & tags = [${tagValues}] & external_games.category = (1) & cover.url != null;`;
  }

  const url = `${process.env.API_URL_BASE}/${endpoint}/`;
  const games = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.API_CLIENT_ID as string,
      Authorization: `Bearer ${process.env.API_SECRET_TOKEN}`,
    },
    body: bodyString,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return games;
};

const GamesPage = async ({ searchParams }: any) => {
  const games = await fetchGames("games", {
    offset: Number(searchParams.offset) || 0,
    sort: searchParams.sort || "sort name asc",
    ratings_range: searchParams.ratings_range || "0,100",
    categories: searchParams.categories || "",
  });

  return (
    <Shell className="space-y-20">
      <TitleHeader
        title="All PC Games"
        description="Explore the PC gaming world!"
        size="sm"
      />
      <Games games={games} categories={gameCategories[0]?.subcategories} />
    </Shell>
  );
};

export default GamesPage;
