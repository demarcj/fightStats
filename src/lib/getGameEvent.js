import { checkTournamentName } from "./index";

export const getGame = async (phaseGroupId) => {
    let tournament = checkTournamentName(phaseGroupId);
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    const targetUrl = `https://api.smash.gg/tournament/${tournament}?expand[]=event`;
    const getUrl = await fetch(proxyUrl + targetUrl);
    const getJson = await getUrl.json();
    const gameTypeId = await Object.values(getJson.entities.event);
    const gameType = gameTypeId.map(game => game.name);
    gameType.unshift("Select Game");
    return gameType;
}
  