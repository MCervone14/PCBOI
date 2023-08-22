export const EpicFreeGames = (url: string) => {
  return fetch(url, { next: { revalidate: 86400 } })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      console.log(err);
    });
};
