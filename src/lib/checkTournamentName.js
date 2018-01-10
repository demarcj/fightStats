export const checkTournamentName = (name) => {
  const noDots = name.toLowerCase().split(`.`).join(``);
  const replaceSpaceWithDash = noDots.split(` `).join(`-`)
  return replaceSpaceWithDash;
}