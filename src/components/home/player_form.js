import React from "react";

export const PlayerForm = props => (
  <form id="tournamentSearch" className="form" onSubmit={props.submit_search}>
    <div className="inputgrg">
      <label htmlFor="player" className="label">Player</label>
        <input 
          type="text"
          name="player"
          id="player"
          className="input"
          onChange={props.input_change}
          value={props.player}
        />
      <button className="button" type="submit">Search Player</button>
    </div>
  </form>
);
