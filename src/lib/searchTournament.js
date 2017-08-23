import { loadTournament, checkTournamentName, loadBracket } from "./index";

export const searchTournament = async (userInputTournament, playerName) =>  {
  const tournamentName = checkTournamentName(userInputTournament);
  const getTournamentObjectToNumber = await loadTournament(tournamentName);
  const tournamentObjectToNumber = await Math.ceil(Number(getTournamentObjectToNumber.total_count)/100);
  const result = await loadBracket(tournamentName, tournamentObjectToNumber, playerName);
  return result;
}
