import React from "react";
import "./home_style.scss";

export const TournamentForm = props => (
  <form onSubmit={props.tournament_submit} className="form" >
    <label htmlFor="tournament" className="label">Tournament</label>
    <input
      type="text"
      name="tournament"
      id="tournament"
      className="input"
      onChange={props.input_change}
      value={props.tournament}
    />
    <button className="button" type="submit">Search</button>
    <select className="game_form input"name="game"onChange={props.input_change}value={props.game}>
      {props.event_list.map((event, i) => <option key={i.toString()}>{event}</option>)}
    </select>
  </form>
);