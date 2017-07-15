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
        name="currentSearch"
        id="search"
        onChange={props.handleInputChange}
        value={props.currentSearch}
      />
    </div>
    <div className="inputgrg">
      <label htmlFor="player1Results">Player 1
        <input type="text"
          name="player1Results"
          onChange={props.handleInputChange}
          value={props.player1Results}
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
  currentSearch: PropTypes.string.isRequired,
  player1Results: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
