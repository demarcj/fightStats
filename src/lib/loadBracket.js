import { checkPlayerName } from "./index";

export const loadBracket = async (page_num, player_name, tournament, game) => {
  async function getPlayerName () {
    const tournamentPlayerList = Array(page_num).fill(undefined);
    const getTournamentPlayerList = tournamentPlayerList.map(async (url, i) => {
      const targetUrl = `https://cors-anywhere.herokuapp.com/https://api.smash.gg/tournament/${tournament.split(" ").join("-")}`;
      const tailEndUrl = `/event/${game.split(" ").join("-")}/standings?entityType=event&expand[]=entrants&mutations[]=playerData&mutations[]=standingLosses&page=${i}&per_page=100`;
      const getUrl = await fetch(targetUrl + tailEndUrl);
      const getJson = await getUrl.json();
      const gamerTag = getJson.items.entities.entrants.map(name => {
        return Object.values(name.mutations.participants)[0].gamerTag;
      }) 
      .filter(obj => checkPlayerName(obj) === checkPlayerName(player_name));
      const result = gamerTag.length === 0 ? "Player Not Found!" : gamerTag[0]
      return result;
      });
    return getTournamentPlayerList[0];
  }
  return getPlayerName();
}
  