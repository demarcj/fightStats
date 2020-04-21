import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Header, Footer } from "./components/static";
import { Home, PlayerForm, TournamentForm} from "./components/home";
import { Nav } from "./components/nav/nav";
import { Help } from "./components/help/help";
import { Info } from "./components/info/info";
import { About } from "./components/about/about";
import { search_tournament, test_error, get_game, check_game } from "./helper_methods";
import "./App.scss";


export default function App() {
  const [error, set_error] = useState("");
  const [tournament, set_tournament] = useState("");
  const [player, set_player] = useState("");
  const [results, set_results] = useState(""); 
  const [game, set_game] = useState("");
  const [event_list, set_event_list] = useState(["Select Game"]);

  const input_change = e => {
    e.preventDefault();
    if (e.target.name === "tournament") {
      set_tournament(e.target.value);
    } else if (e.target.name === "game") {
      set_game(e.target.value);
    } else {
      set_player(e.target.value);
    }
  };

  const search_submit = async e => {
    e.preventDefault();
    const selected_game = check_game(game);
    const tournament_list = await search_tournament( tournament, player, selected_game );
    const found_message = `${tournament_list} did play in ${tournament.toUpperCase()} for ${selected_game}`;
    const not_found_message = `Player Not Found! To check for players from this tournament check.`;
    const message = tournament_list === "Player Not Found!" ? `${not_found_message}` : found_message;
    const helper_link = tournament_list === "Player Not Found!" ? "smash.gg" : "";
    set_results(message);
    set_error(helper_link);
  };

  const tournament_submit = async e => {
    e.preventDefault();
    const getEventList = await get_game(tournament);
    set_event_list(getEventList);
  };

  const empty_submit = e => {
    e.preventDefault();
    set_error(test_error(tournament, player));
  };

  const submit_search = tournament ? search_submit : empty_submit;
  return (
    <Router>
      <Header />
      <main className="main">
        <Nav />
        <section className="center_section">
          <Switch>
            <Route path="/help" component={ Help } />
            <Route path="/about" component={ About } />
            <Route path="/">
              <Home />
              <TournamentForm
                input_change={input_change}
                tournament_submit={tournament_submit}
                event_list={event_list}
                tournament={tournament}
                game={game}
              />
              <PlayerForm
                input_change={input_change}
                player={player}
                submit_search={submit_search}
              />
            </Route>
          </Switch>
        </section>
        <Info results={results} error={error} />
      </main>
      <Footer />
    </Router>
  );
}
