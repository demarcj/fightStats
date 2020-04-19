import React from "react";

export const SearchForm = props => (
  <form id="tournamentSearch" onSubmit={props.handle_submit}>
    <div className="inputgrg">
      <label htmlFor="player1">Player 1 </label>
        <input 
          type="text"
          name="player1"
          id="player1"
          onChange={props.input_change}
          value={props.player1}
        />
      <button type="submit">Search Player</button>
    </div>
  </form>
);
