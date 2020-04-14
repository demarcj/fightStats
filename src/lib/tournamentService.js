export const load_tournament = async (phase_group_id, game_name) => {
  const target_url = `https://cors-anywhere.herokuapp.com/https://api.smash.gg/tournament/${phase_group_id}`;
  const tail_end_url = `/event/${game_name.split(" ").join("-")}/standings?entityType=event&expand[]=entrants&mutations[]=playerData`
  const get_fetch = await fetch(target_url + tail_end_url);
  const get_json = await get_fetch.json();
  return get_json;
}
