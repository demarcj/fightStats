import { loadTournament, checkTournamentName } from "./index";

export const searchTournament = (userInput) =>  {
  const tournamentName = checkTournamentName(userInput);
  const getTournamentObjectToNumber = loadTournament(tournamentName)
  .then(res => {
    const tournamentObjectToNumber = Math.ceil(Number(res.total_count)/100);
    return tournamentObjectToNumber;
  })
  return getTournamentObjectToNumber;
}
