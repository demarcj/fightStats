import React from "react";
import "./home_style.scss";
import { Interface } from "readline";

interface T{
  input_change:(e:any) => void,
  player:string,
  submit_search:(e:any) => void
}

export const PlayerForm: React.FC <T> = props => (
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
