import React from "react";
import PropTypes from "prop-types";

export const SearchForm = (props) => (
  <form id="tournamentSearch" onSubmit={props.handleSubmit}>
    <div className="inputgrg">
      <label htmlFor="player1Results">Player 1
        <input 
          type="text"
          name="searchPlayer1"
          onChange={props.handleInputChange}
          value={props.searchPlayer1}
        />
      </label>
      <button type="submit">Search Player</button>
    </div>
  </form>
);

SearchForm.propTypes = {
  searchPlayer1: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
