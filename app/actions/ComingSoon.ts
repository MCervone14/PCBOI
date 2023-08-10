export const ComingSoon = async (url: string) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.API_CLIENT_ID as string,
      Authorization: `Bearer ${process.env.API_SECRET_TOKEN}`,
    },
    body: `f  id, slug, name, total_rating, total_rating_count,videos.*, external_games.uid, external_games.category, cover.url, release_dates.platform, first_release_date, genres.name; sort total_rating desc; limit 25;
  where cover.url != null & release_dates.platform = (6) & id = (137989,96437,101440,240902,27270,228542,148241,21593,109970,165390);`,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// Games and their IGDB ID's
// ************************************************
// Party Animals	                            137989
// StarField	                                 96437
// S.T.A.L.K.E.R. 2: Heart of Chornobyl	      101440
// Cities: Skylines II	                      240902
// PAYDAY 3	                                   27270
// Armored Core Vi Fires of Rubicon	          228542
// Lies of P	                                148241
// Lords of the Fallen	                       21593
// Endless Dungeons	                          109970
// Blasphemous 2                              165390
// *************************************************
