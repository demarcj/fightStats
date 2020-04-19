import React from "react";

export const SearchFormTournament = props => (
  <form onSubmit={props.tournament_submit}>
    <label htmlFor="tournament">Tournament</label>
    <input
      type="text"
      name="tournament"
      id="search"
      onChange={props.input_change}
      value={props.tournament}
    />
    <button type="submit">Search</button>
    <select className="game_form" name="game" onChange={props.input_change} value={props.game}>
      {props.event_list.map((event, i) => <option key={i.toString()}>{event}</option>)}
    </select>
  </form>
);