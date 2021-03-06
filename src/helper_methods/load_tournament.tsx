import { check_tournament_name } from "./check_tournament_name";

export const load_tournament = async (phase_group_id:string, game_name:string) => {
  const target_url = `https://cors-anywhere.herokuapp.com/https://api.smash.gg/tournament/${phase_group_id}`;
  const tail_end_url = `/event/${check_tournament_name(game_name)}/standings?entityType=event&expand[]=entrants&mutations[]=playerData`
  const get_fetch = await fetch(target_url + tail_end_url);
  const get_json = await get_fetch.json();
  return get_json;
}
