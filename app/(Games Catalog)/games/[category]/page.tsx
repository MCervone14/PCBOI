import Games from "@/components/Games";
import Shell from "@/components/Shell";
import TitleHeader from "@/components/TitleHeader";
import { category } from "@/types";
import React from "react";
import { getCategoryName, tagNumber } from "@/lib/utils";

interface CategoriesProps {
  searchParams: {
    id: string;
    offset: number;
    sort: string;
  };
}

export async function generateMetadata({ searchParams }: CategoriesProps) {
  const categoryName = getCategoryName(+searchParams.id);
  return {
    title: `PCBOI  |  ${categoryName}`,
    description: `Explore Popular ${categoryName} Games`,
  };
}

const fetchCategoryGames = async (
  endpoint: string,
  { offset = 0, id = "0", sort }: { offset: number; id: string; sort: string }
) => {
  const url = `${process.env.API_URL_BASE}/${endpoint}/`;
  const tag = tagNumber(1, +id);

  const games = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.API_CLIENT_ID as string,
      Authorization: `Bearer ${process.env.API_SECRET_TOKEN}`,
    },
    body: `f  id, slug, name, total_rating, external_games.uid,videos.*, tags, external_games.category, genres.id, total_rating_count, cover.url, release_dates.platform, first_release_date, genres.name; ${sort}; limit 20; offset ${offset}; 
    where total_rating != null & total_rating_count > 10 & tags = [${tag}] & external_games.category = 1 & release_dates.platform = (6) & cover.url != null;`,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return games;
};

const CategoriesPage = async ({ searchParams }: CategoriesProps) => {
  const categoryGames = await fetchCategoryGames("games", {
    offset: Number(searchParams.offset) || 0,
    id: searchParams.id || "0",
    sort: searchParams.sort || "sort name asc",
  });

  const categoryName = getCategoryName(+searchParams.id);

  return (
    <Shell className="space-y-20">
      <TitleHeader
        title={`${categoryName} Games`}
        description={`Explore popular ${categoryName} Games`}
        size="sm"
      />
      <Games games={categoryGames} categories={Object.values(category)} />
    </Shell>
  );
};

export default CategoriesPage;
