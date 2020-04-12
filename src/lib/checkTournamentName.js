export const check_tournament_name = (name) => {
  const noDots = name.toLowerCase().split(`.`).join(``);
  const replaceSpaceWithDash = noDots.split(` `).join(`-`)
  return replaceSpaceWithDash;
}