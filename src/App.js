import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchForm } from "./components/ui-form";
import { searchTournament, testError } from "./lib";

class App extends Component {

  state = {
    error: "",
    searchTournamentName: "",
    searchPlayer1: "",
    searchResults: ""
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
    const tournamentList = await searchTournament(tournament, player1); 
    this.setState({ searchResults: [tournamentList] })
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    let getErrorTest = testError(this.state.searchTournamentName, this.state.searchPlayer1)
    this.setState({ 
      error: [getErrorTest]
    })
  }

  render() {

    const submitSearchHandler = this.state.searchTournamentName ? this.handleSearchSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Rankings</h2>
        </div>
        <p className="App-intro">Welcome to Rankings</p>
        <p>{this.state.error}</p>
        <SearchForm
          handleInputChange={this.handleInputChange}
          searchTournamentName={this.state.searchTournamentName}
          searchPlayer1={this.state.searchPlayer1}
          handleSubmit={submitSearchHandler}
        />
        <p>{this.state.searchResults}</p>
      </div>
    );
  }
}

export default App;
