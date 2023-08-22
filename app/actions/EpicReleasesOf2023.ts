export const EpicReleasesOf2023 = async (url: string) => {
  return await fetch(url, {
    next: { revalidate: 86400 },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.API_CLIENT_ID as string,
      Authorization: `Bearer ${process.env.API_SECRET_TOKEN}`,
    },
    body: `f  id, slug, name, total_rating, total_rating_count,videos.*, external_games.uid, external_games.category, cover.url, release_dates.platform, first_release_date, genres.name; sort total_rating desc; limit 25;
  where cover.url != null & release_dates.platform = (6) & id = (132181,191692,233585,201156,136625,217554,50531,159119,135818,204354);`,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// Games and their IGDB ID's
// ************************************************
// Resident Evil 4	                         132181
// Street Fighter 6	                         191692
// Hi-Fi Rush	                               233585
// Star Wars Jedi Survivor	                 201156
// HogWarts Legacy	                         136625
// Octopath Traveler II	                     217554
// BattleBit Remastered                       50531
// Dead Space	                               159119
// Pizza Tower	                             135818
// Aliens: Dark Descent	                     204354
// *************************************************
