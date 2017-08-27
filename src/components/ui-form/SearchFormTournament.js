import React from "react";
// import PropTypes from "prop-types";

export const SearchFormTournament = (props) => {
  const noVenueList = props.eventList.slice(1, props.eventList.length);
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
      <select>
        {noVenueList.map((event, i) => <option key={i.toString()}>{event}</option>)}
      </select>
      <button type="submit">Search</button>
    </form>
  );
}