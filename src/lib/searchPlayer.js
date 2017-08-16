import { loadBracket, checkPlayerName, checkTournamentName } from "./index";

export const SearchPlayer = (userInputTournamentName, userInputPlayerName, maxPageNum) => {
  // function pageLoop() {
    let pageNum = 1;
    const tournamentName = checkTournamentName(userInputTournamentName)
    let bracket = loadBracket(tournamentName, pageNum)
      .then(res => {
          pageNum++
          const playerName = res.items.entities.entrants.filter(obj => {
            const name = Object.values(obj.mutations.participants)[0].gamerTag;
            return checkPlayerName(name) === checkPlayerName(userInputPlayerName);
          })
          .map(name => Object.values(name.mutations.participants)[0].gamerTag)

          const result = (playerName.length === 0)
            ? (pageNum >= maxPageNum)
              ? "Player Not Found!"
              : bracket
            : playerName[0]

          return result;
      })
    return bracket;
    // }
  // return pageLoop();
}
 