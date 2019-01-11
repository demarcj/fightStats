import { checkTournamentName } from "./index";

export const getGameName = async (tournamentName, gameName) => {
    const tournament = checkTournamentName(tournamentName);
    const game = checkTournamentName(gameName);
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    const targetUrl = `https://api.smash.gg/tournament/${tournament}?expand[]=event&expand[]=phase`;
    const getUrl = await fetch(proxyUrl + targetUrl);
    const getJson = await getUrl.json();
    const gameTypeId = Object.values(getJson.entities.event);
    const gameIndex = gameTypeId.filter( i => i.slug === `tournament/${tournament}/event/${game}` );
    return gameIndex[0].slug;
};