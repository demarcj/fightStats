export const check_tournament_name = name => (
  name.toLowerCase().split(`.`).join(``).split(` `).join(`-`)
);