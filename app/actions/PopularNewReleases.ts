export const PopularNewReleases = async (url: string) => {
  return await fetch(url, {
    next: { revalidate: 86400 },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.API_CLIENT_ID as string,
      Authorization: `Bearer ${process.env.API_SECRET_TOKEN}`,
    },
    body: `f  id, slug, name, total_rating, total_rating_count,videos.*, external_games.uid, external_games.category, cover.url, release_dates.platform, first_release_date, genres.name; sort total_rating desc; limit 25;
    where cover.url != null & release_dates.platform = (6) & id = (204239 ,134582,194465,194203,228535,203722,248358,72767,119171,236660 );`,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// Games and their IGDB ID's
// ************************************************
// DeadLink	                                  204239
// Ratchet and Clank	                        134582
// TechTonica	                                194465
// ExoPrimal	                                194203
// Remnant II	                                228535
// Dave The Diver	                            203722
// Double Dragon Gaiden: Rise of the Dragons	248358
// Jagged Alliance 3	                         72767
// Baldur's Gate 3	                          119171
// Ghost Trick: Phantom Detective	            236660
// *************************************************
