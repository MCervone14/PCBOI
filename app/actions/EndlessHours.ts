export const EndlessHours = async (url: string) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.API_CLIENT_ID as string,
      Authorization: `Bearer ${process.env.API_SECRET_TOKEN}`,
    },
    body: `f  id, slug, name, total_rating, total_rating_count,videos.*, external_games.uid, external_games.category, cover.url, release_dates.platform, first_release_date, genres.name; sort total_rating desc; limit 25;
  where cover.url != null & release_dates.platform = (6) & id = (7046,17000,1879,866,11800,3075,9789,113112,9066,138950);`,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// Games and their IGDB ID's
// ************************************************
// Factorio 	                                 7046
// StarDew Valley	                            17000
// Terraria	                                   1879
// Civ 5	                                      866
// Divinity: Original Sin 2	                  11800
// FTL	                                       3075
// RimWorld	                                   9789
// Hades	                                   113112
// Cities: Skylines	                           9066
// Monster Hunter Rise                        138950
// *************************************************
