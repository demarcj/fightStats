import { loadTournament } from "./tournamentService";

export const SearchTournament = (userInput) =>  {
  loadTournament(userInput)
  .then(res => {
    let tournamentName = res.entities.event.map(obj => {
      return obj.id;
    })
    return tournamentName;
  })
}
