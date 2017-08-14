export const checkTournamentName = (name) => {
  const tournamentNameChecker = name.toLowerCase().split(" ").join("-");
  return tournamentNameChecker;
}