import { checkTournamentName } from "./index";

export const getGameName = async (tournamentName, eventArr) => {
  async function fetchGameName () {
    const tournament = checkTournamentName(tournamentName);
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    const targetUrl = `https://api.smash.gg/tournament/${tournament}?expand[]=event&expand[]=phase`;
    const getUrl = await fetch(proxyUrl + targetUrl);
    const getJson = await getUrl.json();
    const gameTypeId = await Object.values(getJson.entities.event);
    console.log(typeof gameTypeId);
    // const gameType = await gameTypeId.map(game => game.name);
    return `super-smash-bros-melee`;
  }
  return fetchGameName();
};