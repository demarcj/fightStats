import { loadTournament } from "./tournamentService";

export const SearchTournament = (userInput) =>  {
  const getTournamentId = loadTournament(userInput)
  .then(res => {
    let tournamentId = res.entities.event.map(obj => {
      return obj.id;
    })
    return tournamentId;
  })
  return getTournamentId;
}
