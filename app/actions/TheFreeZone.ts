export const TheFreeZone = async (url: string) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.API_CLIENT_ID as string,
      Authorization: `Bearer ${process.env.API_SECRET_TOKEN}`,
    },
    body: `f  id, slug, name, total_rating, total_rating_count,videos.*, external_games.uid, external_games.category, cover.url, release_dates.platform, first_release_date, genres.name; sort total_rating desc; limit 25;
  where cover.url != null & release_dates.platform = (6) & id = (231090,1911,891,2963,114795,125174,119277,26128,1279,115);`,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// Games and their IGDB ID's
// ************************************************
// Fortnite*	                               231090
// Path of Exile	                             1911
// Team Fortress 2	                            891
// Dota 2	                                     2963
// Apex Legends	                             114795
// Overwatch 2	                             125174
// Genshin Impact*	                         119277
// Lost Ark	                                  26128
// HearthStone*	                               1279
// League of Legends*	                          115
// *************************************************
