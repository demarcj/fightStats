import React, { Component } from 'react';
import './App.css';
import { SearchForm, SearchFormTournament } from "./components/ui-form";
import { searchTournament, testError, getGame, getGameName, checkGame } from "./lib";

class App extends Component {

  state = {
    error: "",
    searchTournamentName: "",
    searchPlayer1: "",
    searchResults: "",
    game: "",
    helperMessage: "",
    eventList: ["Select Game"]
  }

  handleInputChange = (evt) => {
    evt.preventDefault();
    const name = evt.target.name;
    this.setState({ [name]: evt.target.value })
  }

  handleSearchSubmit = async (evt) =>  {
    evt.preventDefault();
    const tournament = this.state.searchTournamentName;
    const player1 = this.state.searchPlayer1;
    const eventArr = this.state.eventList;
    const selectedGame = checkGame(eventArr, this.state.game);    
    const gameName = await getGameName(tournament, selectedGame);
    const tournamentList = await searchTournament(tournament, player1, selectedGame);
    const foundMessage = `${tournamentList} did play in ${tournament.toLocaleUpperCase()} for ${selectedGame}`;
    const notFoundMessage = `Player Not Found! To check for players from this tournament check `; 
    const message = tournamentList === "Player Not Found!" ? `${notFoundMessage}` : foundMessage; 
    const helperLink = tournamentList === "Player Not Found!" ? "smash.gg" : "";
    this.setState({ searchResults: message, helperMessage: helperLink });
  }

  handleTournamentSubmit = async (evt) =>  {
    evt.preventDefault();
    const tournament = this.state.searchTournamentName;
    const getEventList = await getGame(tournament); 
    this.setState({ eventList: getEventList })
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    const getErrorTest = testError(this.state.searchTournamentName, this.state.searchPlayer1)
    this.setState({ error: getErrorTest })
  }

  render() {
    const submitSearchHandler = this.state.searchTournamentName ? this.handleSearchSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Fighter Stats</h2>
        </div>
        <p className="App-intro">Select the Tournament</p>
        <p>{this.state.error}</p>
        <SearchFormTournament
          handleInputChange={this.handleInputChange}
          handleTournamentSubmit={this.handleTournamentSubmit}
          eventList={this.state.eventList}
          searchTournamentName={this.state.searchTournamentName}
          game = {this.state.game}
        />
        <SearchForm
          handleInputChange={this.handleInputChange}
          searchPlayer1={this.state.searchPlayer1}
          handleSubmit={submitSearchHandler}
        />
        <p>To test the form go to smash.gg and copy and paste the name of the tournament in the first</p>
        <p>Select a game</p>
        <p>Type a player's name in the Player field to see if that person attended the tournament</p>
        <p>{this.state.searchResults} <a href="https://smash.gg">{this.state.helperMessage}</a></p>
      </div>
    );
  }
}

export default App;
