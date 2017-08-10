

export const loadBracket = (phaseGroupId, pageNum) => {
  const targetUrl = `https://api.smash.gg/tournament/${phaseGroupId}/event/super-smash-bros-melee/standings?entityType=event&expand[]=entrants&mutations[]=playerData&mutations[]=standingLosses&page=${pageNum}&per_page=100`;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  return fetch(proxyUrl + targetUrl).then(res => res.json())
//   .then(jsonRes => {
//     const entrantList = jsonRes.items.entities.entrants.map(obj => {
//       return Object.keys(obj.mutations.participants);
//     });

//     const playerNameList = jsonRes.items.entities.entrants.map((obj, i) => {
//       console.log("playerNameList", obj.mutations.participants[entrantList[i]].gamerTag);
//       return obj.mutations.participants[entrantList[i]].gamerTag;
//     });
//     const playerName = playerNameList.filter( name => {
//       return name === userInputPlayerName;
//     });
//     return playerName;
//   })
}
