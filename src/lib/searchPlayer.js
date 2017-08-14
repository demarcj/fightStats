import { loadBracket, checkPlayerName, checkTournamentName } from "./index";

let pageNum = 1;

export const SearchPlayer = (userInputTournamentName, userInputPlayerName, maxPageNum) => {
  // function pageLoop() {
  //   i++
    // console.log("Loop iterable", i);
    const tournamentName = checkTournamentName(userInputTournamentName)
    let bracket = loadBracket(tournamentName, 1)
      .then(res => {
           pageNum++
          const playerName = res.items.entities.entrants.map(obj => {
            return Object.keys(obj.mutations.participants);
          })
          .map((key, i) => {
            console.log("playerNameList", res.items.entities.entrants[i].mutations.participants[key].gamerTag);
            return res.items.entities.entrants[i].mutations.participants[key].gamerTag;
          })
          .filter( name => {
            return checkPlayerName(name) === checkPlayerName(userInputPlayerName);
          });

          if(playerName.length === 0){
            if(pageNum >= maxPageNum){
              return "Player Not Found!";
            }
            return bracket;
            } else {
              return playerName[0];
          }
      })

    return bracket;
    // }
  // return pageLoop();
}
 