import Games from "@/components/Games";
import Shell from "@/components/Shell";
import TitleHeader from "@/components/TitleHeader";
import { category } from "@/types";
import React from "react";

const fetchTopReleases = async (
  endpoint: string,
  { offset = 0, sort }: { offset: number; sort: string }
) => {
  const url = `${process.env.API_URL_BASE}/${endpoint}/`;

  const games = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.API_CLIENT_ID as string,
      Authorization: `Bearer ${process.env.API_SECRET_TOKEN}`,
    },
    body: `f  id, slug, name, external_games.uid, external_games.category, videos.*, total_rating, total_rating_count, cover.url, release_dates.platform, first_release_date, genres.name; ${sort}; limit 20; offset ${offset};
    where cover.url != null & total_rating != null & release_dates.platform = (6);`,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return games;
};

const Top200Page = async ({ searchParams }: any) => {
  const games = await fetchTopReleases("games", {
    offset: Number(searchParams.offset) || 0,
    sort: searchParams.sort || "sort name asc",
  });
  return (
    <Shell>
      <TitleHeader
        title="Top New Releases"
        description="New releases from the last 6 months"
        size="sm"
      />
      <Games games={games} categories={Object.values(category)} />
    </Shell>
  );
};

export default Top200Page;
