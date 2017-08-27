import React from "react";
// import PropTypes from "prop-types";

export const SearchFormTournament = (props) => {
  console.log(props.eventList);
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
        {props.eventList.map((event, i) => <option key={i.toString()}>{event}</option>)}
      </select>
      <button type="submit">Search</button>
    </form>
  );
}