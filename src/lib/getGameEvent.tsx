import { check_tournament_name } from "./index";

export const get_game = async (phase_group_id:string) => {
    let tournament = check_tournament_name(phase_group_id);
    const proxy_url = `https://cors-anywhere.herokuapp.com/`;
    const target_url = `https://api.smash.gg/tournament/${tournament}?expand[]=event`;
    const get_url = await fetch(proxy_url + target_url);
    const get_json = await get_url.json();
    const game_type_id = await Object.values(get_json.entities.event);
    const game_type = game_type_id.map(game => game.name);
    game_type.unshift("Select Game");
    return game_type; 
}
  