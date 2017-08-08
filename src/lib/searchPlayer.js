import { loadBracket } from "./bracketService";

export const SearchPlayer = (userInput, tournamentId) => {
  console.log("Tournament Id Test", tournamentId)
  const getPlayerName = tournamentId.map(id => {
    let loadId = loadBracket(10665)
      .then(res => {
        if(res.hasOwnProperty('entities')){
          const seedList = res.entities.seeds.map(obj => {
            return Object.keys(obj.mutations.participants);
          });
          const playerNameList = res.entities.seeds.map((obj, i) => {
            console.log("playerNameList", obj.mutations.participants[seedList[i]].gamerTag);
            return obj.mutations.participants[seedList[i]].gamerTag;
          });
          const playerName = playerNameList.filter( name => {
            return name === userInput;
          });
          //console.log("playerName", playerName[0]);
          const playerNameResult = playerName.length === 0 ? undefined : playerName[0];
          return playerNameResult;
        }
      })
      return loadId;
  })
  console.log("getPlayerName", getPlayerName[0]);
  return getPlayerName[0];
}
