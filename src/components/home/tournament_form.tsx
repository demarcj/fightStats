import React from "react";
import "./home_style.scss";

interface T{
  tournament_submit:(e:any) => void,
  tournament:string,
  input_change:(e:any) => void,
  event_list:string[],
  game:string,
  warning:string
}

export const TournamentForm: React.FC <T> = props => (
  <>
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
      <p className="tournament_warning">{props.warning}</p>
      <select className="game_form input" name="game" onChange={props.input_change} value={props.game}>
        {props.event_list.map((event, i) => <option key={i.toString()}>{event}</option>)}
      </select>
    </form>
  </>
);