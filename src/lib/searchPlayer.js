import {loadBracket} from "./bracketService"

  

export const SearchPlayer = async function(playerName) {
  let getId = "Player not found!";
  loadBracket(335886)
    .then(response => {
      let playerList = response.entities.seeds.map((obj) => Object.keys(obj.mutations.participants));
      response.entities.seeds.map(function(obj, i) {
        let valPlayer = obj.mutations.participants[playerList[i]].gamerTag;
        if(valPlayer === playerName){
          getId = valPlayer;
          console.log(getId);
          return valPlayer
        } else {
          return getId;
        }
      })
    })
  return getId;
}

