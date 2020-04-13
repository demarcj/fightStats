import { check_tournament_name } from "./index";

export const getGameName = async (tournamentName, gameName) => {
    const tournament = check_tournament_name(tournamentName);
    // const game = check_tournament_name(gameName);
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    const targetUrl = `https://api.smash.gg/tournament/${tournament}?expand[]=entrants&mutations[]=playerData`;
    const getUrl = await fetch(proxyUrl + targetUrl);
    const getJson = await getUrl.json();
    console.log(getJson);
    // const gameTypeId = await Object.values(getJson.entities.event);
    // const gameIndex = gameTypeId.filter( i => i.slug === `tournament/${tournament}/event/${game}` );
    return getJson.entities.tournament.slug;
};