import React, { useState } from 'react';
import './App.css';
import { SearchForm, SearchFormTournament } from "./components/ui-form";
import { search_tournament, test_error, getGame, checkGame } from "./lib";

function App () {
  const [error, set_error] = useState("");
  const [search_tournament_name, set_search_tournament_name] = useState("");
  const [search_player1, set_search_player1] = useState("");
  const [search_results, set_search_results] = useState("");
  const [game, set_game] = useState("");
  const [helper_message, set_helper_message] = useState("");
  const [event_list, set_event_list] = useState(["Select Game"]);

  const handleInputChange = (evt) => {
    evt.preventDefault();
    const name = evt.target.name;
    set_search_tournament_name({ [name]: evt.target.value })
  }

  const handleSearchSubmit = async evt =>  {
    evt.preventDefault();
    const tournament = search_tournament_name;
    const player1 = search_player1;
    const eventArr = event_list;
    const selectedGame = checkGame(eventArr, game);    
    const tournamentList = await search_tournament(tournament, player1, selectedGame);
    const foundMessage = `${tournamentList} did play in ${tournament.toLocaleUpperCase()} for ${selectedGame}`;
    const notFoundMessage = `Player Not Found! To check for players from this tournament check `; 
    const message = tournamentList === "Player Not Found!" ? `${notFoundMessage}` : foundMessage; 
    const helperLink = tournamentList === "Player Not Found!" ? "smash.gg" : "";
    set_search_results({search_results: message}) 
    set_helper_message({helper_message: helperLink });
  }

  const handleTournamentSubmit = async evt =>  {
    evt.preventDefault();
    const tournament = search_tournament_name;
    const getEventList = await getGame(tournament); 
    set_event_list({ event_list: getEventList })
  }

  const handleEmptySubmit = evt => {
    evt.preventDefault();
    const get_error_test = test_error(search_tournament_name, search_player1)
    set_error({ error: get_error_test })
  }

  const submitSearchHandler = search_tournament_name ? handleSearchSubmit : handleEmptySubmit;
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to Fighter Stats</h2>
      </div>
      <p className="App-intro">Select the Tournament</p>
      <p>{error}</p>
      <SearchFormTournament
        handleInputChange={handleInputChange}
        handleTournamentSubmit={handleTournamentSubmit}
        event_list={event_list}
        search_tournament_name={search_tournament_name}
        game = {game}
      />
      <SearchForm
        handleInputChange={handleInputChange}
        search_player1={search_player1}
        handleSubmit={submitSearchHandler}
      />
      <div class="text_container">
        <p className="body_text">To test the form go to <a href="https://smash.gg">smash.gg</a> and copy and paste the name of the tournament in the first</p>
        <p className="body_text">Select a game</p>
        <p className="body_text">Type a player's name in the Player field to see if that person attended the tournament</p>
        <p className="body_text">{search_results} <a href="https://smash.gg">{helper_message}</a></p>
      </div>
    </div>
  );
}

export default App;
