import { checkPlayerName } from "./index";

export const loadBracket = async (phaseGroupId, pageNum, playerName) => {
  async function getPlayerName () {
    const tournamentPlayerList = Array(pageNum).fill(undefined);
    
    const getTournamentPlayerList = tournamentPlayerList.map(async (url, i) => {
      const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
      const targetUrl = `https://api.smash.gg/tournament/${phaseGroupId}`;
      const tailEndUrl = `/event/super-smash-bros-melee/standings?entityType=event&expand[]=entrants&mutations[]=playerData&mutations[]=standingLosses&page=${i}&per_page=100`;
      const getUrl = await fetch(proxyUrl + targetUrl + tailEndUrl);
      const getJson = await getUrl.json();
      const gamerTag = await getJson.items.entities.entrants.map(name => {
        return Object.values(name.mutations.participants)[0].gamerTag;
      }) 
      .filter(obj => checkPlayerName(obj) === checkPlayerName(playerName));

      const result = gamerTag.length === 0 ? "Player Not Found!" : gamerTag[0]
      return result;
      });
    return getTournamentPlayerList[0];
  }
  return getPlayerName();
}
  