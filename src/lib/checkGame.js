export const checkGame = (eventArr, game) => {
  return game === "" || game === "Select Game" ? undefined : game;
}