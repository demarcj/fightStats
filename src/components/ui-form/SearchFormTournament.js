import React from "react";

export const SearchFormTournament = props => (
  <form onSubmit={props.tournament_submit}>
    <label htmlFor="">Tournament</label>
    <input
      type="text"
      name="tournament"
      id="search"
      onChange={props.input_change}
      value={props.tournament}
    />
    <select name="game" onChange={props.input_change} value={props.game}>
      {props.event_list.map((event, i) => <option key={i.toString()}>{event}</option>)}
    </select>
    <button type="submit">Search</button>
  </form>
);