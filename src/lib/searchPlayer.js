import { loadBracket } from "./bracketService";

export const SearchPlayer = (userInput) => {
  let test = loadBracket(323872)
      .then(res => {
        const seedList = res.entities.seeds.map(obj => {
          return Object.keys(obj.mutations.participants);
        });
        const playerNames = res.entities.seeds.map((obj, i) => {
          return obj.mutations.participants[seedList[i]].gamerTag;
        });
        const r = playerNames.filter( name => {
          return name === userInput;
        });
        // const result = r.length === 0 ? "Player Not Found" : r[0];
        return r;
      })
  console.log(test);
  return test;
}
