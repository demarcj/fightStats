import { loadTournament } from "./tournamentService";

export const SearchTournament = (userInput) =>  {
  const tournamentName = loadTournament(userInput)
  .then(res => {
    let tournamentId = res.entities.event.map(obj => {
      return obj.id;
    })
    return tournamentId;
  })
  return tournamentName;
}
