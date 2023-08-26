export const EpicFreeGames = (url: string) => {
  return fetch(url, { cache: "no-store" })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      console.log(err);
    });
};
