import { loadBracket } from "./bracketService";

export const SearchPlayer = (userInputTournamentName, userInputPlayerName, pageNum) => {
  let i = 0;
  function pageLoop() {
    i++
    console.log("Loop iterable", i);
    loadBracket(userInputTournamentName, i)
      .then(res => {
          const entrantList = res.items.entities.entrants.map(obj => {
            return Object.keys(obj.mutations.participants);
          });
          const playerNameList = res.items.entities.entrants.map((obj, i) => {
            console.log("playerNameList", obj.mutations.participants[entrantList[i]].gamerTag);
            return obj.mutations.participants[entrantList[i]].gamerTag;
          });
          const playerName = playerNameList.filter( name => {
            return name === userInputPlayerName;
          });
          let playerNameResult = "";
          if(playerName.length === 0){
            if(i >= pageNum){
              console.log("Player Not Found!")
              return "Player Not Found!";
            }
            return pageLoop();
            } else {
              playerNameResult = playerName[0];
              console.log("Test type", playerNameResult)
              return playerNameResult;
          }
      })
    }
  return pageLoop();
}
 