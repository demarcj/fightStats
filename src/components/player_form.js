import React from "react";

export const PlayerForm = props => (
  <form id="tournamentSearch" onSubmit={props.submit_search}>
    <div className="inputgrg">
      <label htmlFor="player">Player</label>
        <input 
          type="text"
          name="player"
          id="player"
          onChange={props.input_change}
          value={props.player}
        />
      <button type="submit">Search Player</button>
    </div>
  </form>
);
