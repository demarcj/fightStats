import { loadTournament } from "./tournamentService";

export const SearchTournament = (userInput) =>  {
  const getTournamentId = loadTournament(userInput)
  .then(res => {
    const tournamentId = res.entities.event.map(obj => {
      return obj.id;
    })
    return tournamentId;
  })
  return getTournamentId;
}
