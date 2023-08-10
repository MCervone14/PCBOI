export const AwesomeIndieGames = async (url: string) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-ID": process.env.API_CLIENT_ID as string,
      Authorization: `Bearer ${process.env.API_SECRET_TOKEN}`,
    },
    body: `f  id, slug, name, total_rating, total_rating_count,videos.*, external_games.uid, external_games.category, cover.url, release_dates.platform, first_release_date, genres.name; sort total_rating desc; limit 25;
  where cover.url != null & release_dates.platform = (6) & id = (139090,104967,145099,152779,164944,137931,186725,223718,145782,144022);`,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// Games and their IGDB ID's
// ************************************************
// Inscryption	                              139090
// Valheim	                                  104967
// Death's Door	                              145099
// Big Ambitions	                            152779
// Cultic	                                    164944
// Novalands	                                137931
// Vampire Survivors	                        186725
// Oblivion Override                          223718
// OlliOlli World	                            145782
// Sifu	                                      144022
// *************************************************
