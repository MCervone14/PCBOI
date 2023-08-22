export const HiddenGems = async (url: string) => {
  return await fetch(url, {
    next: { revalidate: 86400 },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.API_CLIENT_ID as string,
      Authorization: `Bearer ${process.env.API_SECRET_TOKEN}`,
    },
    body: `f  id, slug, name, total_rating, total_rating_count,videos.*, external_games.uid, external_games.category, cover.url, release_dates.platform, first_release_date, genres.name; sort total_rating desc; limit 25;
  where cover.url != null & release_dates.platform = (6) & id = (118875,27344,11737,164867,26472,121762,14761,35282,219788,37001);`,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// Games and their IGDB ID's
// ************************************************
// RoadWarden	                               118875
// Barotrauma	                                27344
// Outer Wilds	                              11737
// Dredge	                                   164867
// Disco Elysium	                            26472
// EverSpace 2	                             121762
// Rain World	                                14761
// CrossCode	                                35282
// GameDec	                                 219788
// Ori	                                      37001
// *************************************************
