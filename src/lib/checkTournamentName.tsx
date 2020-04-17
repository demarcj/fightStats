export const check_tournament_name = (name:string) => (
  name.toLowerCase().split(`.`).join(``).split(` `).join(`-`)
);