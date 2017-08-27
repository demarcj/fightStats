import { checkTournamentName } from "./index";

export const getGame = async (phaseGroupId) => {
  async function getPlayerName () {
    const tournament = checkTournamentName(phaseGroupId);
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    const targetUrl = `https://api.smash.gg/tournament/${tournament}`;
    const getUrl = await fetch(proxyUrl + targetUrl);
    const getJson = await getUrl.json();
    const gameTypeId = await Object.values(getJson.entities.tournament.registrationOptions);
    const gameType = await gameTypeId.map(game => game.name);
    return gameType;
  }
  return getPlayerName().then(result =>  result);
}
  