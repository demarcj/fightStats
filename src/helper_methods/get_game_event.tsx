import { check_tournament_name } from "./index";

export const get_game = async (user_input:string) => {
  try{
    const tournament_name = check_tournament_name(user_input);
    const proxy_url = `https://cors-anywhere.herokuapp.com/`;
    const target_url = `https://api.smash.gg/tournament/${tournament_name}?expand[]=event`;
    const get_url = await fetch(proxy_url + target_url);
    const get_json = await get_url.json();
    const game_type_id = await Object.values(get_json.entities.event);
    const game_type = game_type_id.map((game:any) => game.name);
    game_type.unshift("Select Game");
    return game_type; 
  } catch (e) {
    const out_come = user_input === `` ? `The tournament field is empty` : `Tournament Not Found`;
    return out_come;
  }
}
  