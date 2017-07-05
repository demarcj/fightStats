import React from "react";
import PropTypes from "prop-types";

export const SearchForm = (props) => (
  <form onSubmit={props.handleSubmit} >
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
    <div className="inputgrp">
      <label htmlFor="player1">Player</label>
      <input type="text" name="player1" id="player1"/>
      <label htmlFor="player2">Player</label>
      <input type="text" name="player2" id="player2"/>
    </div>
    <button type="submit">Search</button>
  </form>
);

SearchForm.propTypes = {
  currentSearch: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
