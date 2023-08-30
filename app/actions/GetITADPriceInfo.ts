export const getITADPriceInfo = async (appIds: any[]) => {
  const url = `https://api.isthereanydeal.com/v01/game/prices/?key=${
    process.env.ITAD_API_KEY
  }&plains=${appIds.join(
    ","
  )}&country=US&region=us&shops=steam&limit=100&strict=0`;
  const res = await fetch(url, { next: { revalidate: 86400 } }).then((res) =>
    res.json()
  );
  return res;
};

// Might use if I go back to cheapshark
// const priceData = await Promise.all(
//   appIds.map(async (game: any) => {
//     if (game.steamAppID === undefined) {
//       const url = `https://www.cheapshark.com/api/1.0/games?title=${game.name}`;
//       const res = await fetch(url, { next: { revalidate: 86400 } }).then(
//         (res) => res.json()
//       );
//       return res;
//     } else {
//       const url = `https://www.cheapshark.com/api/1.0/games?steamAppID=${game.steamAppID}`;
//       const res = await fetch(url, { next: { revalidate: 86400 } }).then(
//         (res) => res.json()
//       );
//       return res;
//     }
//   })
// );
// return priceData;
