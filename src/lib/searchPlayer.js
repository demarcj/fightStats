import { loadBracket } from "./bracketService";

export const SearchPlayer = (userInput) => {
let lb =   loadBracket(323872)
  .then(res => {
    const seedList = res.entities.seeds.map(obj => {
      return Object.keys(obj.mutations.participants);
    });
    console.log(seedList)    
    console.log(seedList[0])
    const playerNames = res.entities.seeds.map((obj, i) => {
      return obj.mutations.participants[seedList[i]].gamerTag;
    });
    //console.log(playerNames)
    //console.log(userInput);
    const r = playerNames.filter( name => {
      console.log(name);
      return name === userInput
    });
    console.log("Filter return", r[0])
    const q = r[0];
    return r[0];
  });

  return lb
}