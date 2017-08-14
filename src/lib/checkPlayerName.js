export const checkPlayerName = (name) => {
  let nameChecker = name.toLowerCase().split(" ").join("");
  return nameChecker;
}