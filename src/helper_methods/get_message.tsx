export const get_message = (submited_player:string, tournament:string, selected_game:string) => {
  const found_message = `${submited_player} did play in ${tournament.toUpperCase()} for ${selected_game}`;
  const not_found_message = `Player Not Found! To check for players from this tournament check.`;
  return submited_player === "Player Not Found!" ? `${not_found_message}` : found_message;
}