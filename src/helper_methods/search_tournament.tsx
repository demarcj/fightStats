import { load_tournament, check_tournament_name, get_player_info } from "./index";

export const search_tournament = async (tournament:string, player:string, game:string) =>  {
  const tournament_name = await check_tournament_name(tournament);
  const get_tournament_object_to_number = await load_tournament(tournament_name, game);
  const tournament_object_to_number = Math.ceil(Number(get_tournament_object_to_number.total_count)/100);
  const stupid = await get_player_info(tournament_object_to_number, player, tournament, game);
  return stupid;
}
