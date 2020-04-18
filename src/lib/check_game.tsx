export const check_game = (game:string) => (
  game === "" || game === "Select Game" ? "" : game
);