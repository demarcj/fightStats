import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components/static";
import { Home, PlayerForm, TournamentForm} from "./components/home";
import { Nav } from "./components/nav/nav";
import { Help } from "./components/help/help";
import { Info } from "./components/info/info";
import { About } from "./components/about/about";
import { search_tournament, test_error, get_game, check_game, get_message } from "./helper_methods";
import "./App.scss";


export default function App() {
  const [error, set_error] = useState("");
  const [warning, set_warning] = useState("");
  const [tournament, set_tournament] = useState("");
  const [player, set_player] = useState("");
  const [results, set_results] = useState(""); 
  const [game, set_game] = useState("");
  const [event_list, set_event_list] = useState(["Select Game"]);

  const input_change = (e:any) => {
    e.preventDefault();
    if (e.target.name === "tournament") {
      set_tournament(e.target.value);
    } else if (e.target.name === "game") {
      set_game(e.target.value);
    } else {
      set_player(e.target.value);
    }
  };

  const submit_player = async (e:any) => {
    e.preventDefault();
    const selected_game = check_game(game);
    const submited_player = await search_tournament( tournament, player, selected_game );
    const found_message = `${submited_player} did play in ${tournament.toUpperCase()} for ${selected_game}`;
    const not_found_message = `Player Not Found! To check for players from this tournament check.`;
    const message = submited_player === "Player Not Found!" ? `${not_found_message}` : found_message;
    const helper_link = submited_player === "Player Not Found!" ? "smash.gg" : "";
    set_results(get_message(submited_player, tournament, selected_game));
    set_error(helper_link);
  };

  const tournament_submit = async (e:any) => {
    e.preventDefault();
    const get_event_list = await get_game(tournament);
    if(typeof get_event_list === `string`){
      set_warning(get_event_list);
    } else {
      set_event_list(get_event_list);
    }
  };

  const empty_submit = (e:any) => {
    e.preventDefault();
    set_error(test_error(tournament, player));
  };

  const submit_search = tournament ? submit_player : empty_submit;
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
                warning={warning}
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
