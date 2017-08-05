import { loadBracket } from "./bracketService";

export const SearchPlayer = (userInput) => {
  loadBracket(323872)
  .then(res => {
    const seedList = res.entities.seeds.map(obj => {
      return Object.keys(obj.mutations.participants);
    });

    const playerName = res.entities.seeds.map((obj, i) => {
      return obj.mutations.participants[seedList[i]].gamerTag;
    });
    console.log(playerName);
    playerName.map( obj => {
      if(userInput === obj){
        console.log("Something");
        return obj;
      }
    });
  })
  return "OK";
}