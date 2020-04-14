import { load_tournament, check_tournament_name, load_bracket } from "./index";

export const search_tournament = async (user_input_tournament, player_name, game_name) =>  {
  const tournament_name = await check_tournament_name(user_input_tournament);
  const get_tournament_object_to_number = await load_tournament(tournament_name, game_name);
  const tournament_object_to_number = Math.ceil(Number(get_tournament_object_to_number.total_count)/100);
  return load_bracket(tournament_object_to_number, player_name, user_input_tournament, game_name);
}
