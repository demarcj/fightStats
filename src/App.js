import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { SearchForm, SearchFormTournament, Footer, Header, Help, Info, About, Home } from "./components";
import { search_tournament, test_error, get_game, check_game } from "./lib";

export default function App() {
  const [error, set_error] = useState("");
  const [tournament, set_tournament] = useState("");
  const [player1, set_player1] = useState("");
  const [results, set_results] = useState("");
  const [game, set_game] = useState("");
  const [helper_message, set_helper_message] = useState("");
  const [event_list, set_event_list] = useState(["Select Game"]);

  const input_change = e => {
    e.preventDefault();
    if (e.target.name === "tournament") {
      set_tournament(e.target.value);
    } else if (e.target.name === "game") {
      set_game(e.target.value);
    } else {
      set_player1(e.target.value);
    }
  };

  const search_submit = async e => {
    e.preventDefault();
    const selected_game = check_game(game);
    const tournament_list = await search_tournament( tournament, player1, selected_game );
    const found_message = `${tournament_list} did play in ${tournament.toUpperCase()} for ${selected_game}`;
    const not_found_message = `Player Not Found! To check for players from this tournament check.`;
    const message = tournament_list === "Player Not Found!" ? `${not_found_message}` : found_message;
    const helper_link = tournament_list === "Player Not Found!" ? "smash.gg" : "";
    set_results(message);
    set_helper_message(helper_link);
  };

  const tournament_submit = async e => {
    e.preventDefault();
    const getEventList = await get_game(tournament);
    set_event_list(getEventList);
  };

  const empty_submit = e => {
    e.preventDefault();
    set_error(test_error(tournament, player1));
  };

  const submit_search = tournament ? search_submit : empty_submit;
  return (
    <Router>
      <Header />
      <main className="main">
        <nav className="nav_link">
          <ul className="nav_list">
            <li className="nav_list_item">
              <NavLink className="nav_list_link" to="/fightStat">Home</NavLink>
            </li>
            <li className="nav_list_item">
              <NavLink className="nav_list_link" to="/about">About</NavLink>
            </li>
            <li className="nav_list_item">
              <NavLink className="nav_list_link" to="/help">Help</NavLink>
            </li>
          </ul>
        </nav>
        <section>
          <Switch>
            <Route path="/help">
              <Help results={results} helper_message={helper_message} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home error={error}/>
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
            </Route>
          </Switch>
        </section>
        <Info />
      </main>
      <Footer />
    </Router>
  );
}
