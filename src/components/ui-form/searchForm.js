import React from "react";
import PropTypes from "prop-types";

export const SearchForm = (props) => (
  <form
    id="tournamentSearch" 
    onSubmit={props.handleSubmit}
  >
    <div className="inputgrp">
      <label htmlFor="search">Tournament</label>
      <input
        type="text"
        name="searchTournament"
        id="search"
        onChange={props.handleInputChange}
        value={props.searchTournament}
      />
    </div>
    <div className="inputgrg">
      <label htmlFor="player1Results">Player 1
        <input type="text"
          name="searchPlayer1"
          onChange={props.handleInputChange}
          value={props.searchPlayer1}
        />
      </label>
    </div>
    <button
       type="submit"
    >
      Search
    </button>
  </form>
);

SearchForm.propTypes = {
  searchTournament: PropTypes.string.isRequired,
  searchPlayer1: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
