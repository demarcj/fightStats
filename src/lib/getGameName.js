import { check_tournament_name } from "./index";

export const get_game_name = async tournament_name => {
    const tournament = check_tournament_name(tournament_name);
    const proxy_url = `https://cors-anywhere.herokuapp.com/`;
    const target_url = `https://api.smash.gg/tournament/${tournament}?expand[]=entrants&mutations[]=playerData`;
    const get_url = await fetch(proxy_url + target_url);
    const get_json = await get_url.json();
    return get_json.entities.tournament.slug;
};