import { loadTournament, checkTournamentName, loadBracket } from "./index";

export const searchTournament = async (userInputTournament, playerName, gameName) =>  {
  const tournamentName = checkTournamentName(userInputTournament);
  const getTournamentObjectToNumber = await loadTournament(tournamentName);
  const tournamentObjectToNumber = await Math.ceil(Number(getTournamentObjectToNumber.total_count)/100);
  const result = loadBracket(tournamentName, tournamentObjectToNumber, playerName, gameName);
  return result;
}
