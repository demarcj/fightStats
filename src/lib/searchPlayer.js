import { loadBracket } from "./bracketService";

export const SearchPlayer = (userInput, tournamentId) => {
  console.log("Tournament Id Test", tournamentId)
  let getPlayerName = loadBracket(323872)
      .then(res => {
        const seedList = res.entities.seeds.map(obj => {
          return Object.keys(obj.mutations.participants);
        });
        const playerNameList = res.entities.seeds.map((obj, i) => {
          return obj.mutations.participants[seedList[i]].gamerTag;
        });
        const playerName = playerNameList.filter( name => {
          return name === userInput;
        });
        const result = playerName.length === 0 ? "Player Not Found" : playerName[0];
        return result;
      })
  console.log(getPlayerName);
  return getPlayerName;
}
