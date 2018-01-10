import { checkTournamentName } from "./index";

export const getGameName = async (tournamentName, gameName) => {
  async function fetchGameName () {
    const tournament = checkTournamentName(tournamentName);
    const game = checkTournamentName(gameName);
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    const targetUrl = `https://api.smash.gg/tournament/${tournament}?expand[]=event&expand[]=phase`;
    const getUrl = await fetch(proxyUrl + targetUrl);
    const getJson = await getUrl.json();
    const gameTypeId = await Object.values(getJson.entities.event);
    const gameIndex = await gameTypeId.filter( i => i.slug === `tournament/${tournament}/event/${game}` );
    console.log(`I'm the error`, gameIndex[0].slug);
    return gameIndex[0].slug;
  }
  return fetchGameName();
};