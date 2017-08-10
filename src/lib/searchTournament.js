import { loadTournament } from "./tournamentService";

export const SearchTournament = (userInput) =>  {
  const getTournamentObjectToNumber = loadTournament(userInput)
  .then(res => {
    const tournamentObjectToNumber = Math.ceil(Number(res.total_count)/100);
    return tournamentObjectToNumber;
  })
  return getTournamentObjectToNumber;
}
