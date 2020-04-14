import React, { useState } from 'react';
import './App.scss';
import { SearchForm, SearchFormTournament } from "./components/ui-form";
import { search_tournament, test_error, get_game, check_game } from "./lib";

export default function App () {
  const [error, set_error] = useState("");
  const [tournament, set_tournament] = useState("");
  const [player1, set_player1] = useState("");
  const [results, set_results] = useState("");
  const [game, set_game] = useState("");
  const [helper_message, set_helper_message] = useState("");
  const [event_list, set_event_list] = useState(["Select Game"]);

  const input_change = e => {
    e.preventDefault();
    if(e.target.name === "tournament"){
      set_tournament(e.target.value);
    } else if(e.target.name === "game") {
      set_game(e.target.value);
    } else {
      set_player1(e.target.value);
    }
  }

  const search_submit = async e =>  {
    e.preventDefault();
    const selected_game = check_game(game);    
    const tournament_list = await search_tournament(tournament, player1, selected_game);
    const found_message = `${tournament_list} did play in ${tournament.toUpperCase()} for ${selected_game}`;
    const not_found_message = `Player Not Found! To check for players from this tournament check.`; 
    const message = tournament_list === "Player Not Found!" ? `${not_found_message}` : found_message; 
    const helper_link = tournament_list === "Player Not Found!" ? "smash.gg" : "";
    set_results(message);
    set_helper_message(helper_link);
  }

  const tournament_submit = async e =>  {
    e.preventDefault();
    const getEventList = await get_game(tournament); 
    set_event_list(getEventList);
  }

  const empty_submit = e => {
    e.preventDefault();
    set_error(test_error(tournament, player1));
  }

  const submit_search = tournament ? search_submit : empty_submit;
  return (
    <>
      <header>
        <aside></aside>
        <h2 className="App-header">Welcome to Fighter Stats</h2>
        <aside></aside>
      </header>
      <main className="main">
        <aside></aside>
        <section class="content">
          <p className="App-intro">Select the Tournament</p>
          <p className="errot_text">{error}</p>
          <SearchFormTournament
            input_change={input_change}
            tournament_submit={tournament_submit}
            event_list={event_list}
            tournament={tournament}
            game={game} 
          />
          <SearchForm
            input_change={input_change}
            player1={player1}
            handle_submit={submit_search}
          />
          <div className="text_container">
            <p className="body_text">1. To test the form go to <a href="https://smash.gg">smash.gg</a> and copy and paste the name of the tournament in the first</p>
            <p className="body_text">2. Select a game</p>
            <p className="body_text">3. Type a player's name in the Player field to see if that person attended the tournament</p>
            <p className="body_text">{results} <a href="https://smash.gg">{helper_message}</a></p>
          </div>
        </section>
        <aside></aside>
      </main>
      <footer className="footer">
        <aside></aside>
        <p className="copyright">&copy; 2020 DeMarc Johnson</p>
        <aside></aside>
      </footer>
    </>
  );
}
