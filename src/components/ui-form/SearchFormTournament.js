import React from "react";
// import PropTypes from "prop-types";

export const SearchFormTournament = (props) => {
  return (
    <form onSubmit={props.handleTournamentSubmit}>
      <label htmlFor="">Tournament</label>
      <input
        type="text"
        name="searchTournamentName"
        id="search"
        onChange={props.handleInputChange}
        value={props.searchTournamentName}
      />
      <select name="game" onChange={props.handleInputChange} value={props.game}>
        {props.eventList.map((event, i) => <option key={i.toString()}>{event}</option>)}
      </select>
      <button type="submit">Search</button>
    </form>
  );
}