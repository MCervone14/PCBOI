export const getCheapSharkPriceInfo = async (appIds: any[]) => {
  const priceData = await Promise.all(
    appIds.map(async (game: any) => {
      if (game.steamAppID === undefined) {
        const url = `https://www.cheapshark.com/api/1.0/games?title=${game.name}`;
        const res = await fetch(url, { next: { revalidate: 43200 } }).then(
          (res) => res.json()
        );
        return res;
      } else {
        const url = `https://www.cheapshark.com/api/1.0/games?steamAppID=${game.steamAppID}`;
        const res = await fetch(url, { next: { revalidate: 43200 } }).then(
          (res) => res.json()
        );
        return res;
      }
    })
  );
  return priceData;
};
