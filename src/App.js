import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchForm } from "./components/ui-form";
import { SearchTournament, SearchPlayer, testError, loadBracket } from "./lib";

class App extends Component {

  state = {
    error: "",
    searchTournament: "",
    searchPlayer1: "",
    searchResults: ""
  }

  handleInputChange = (evt) => {
    evt.preventDefault();
    const name = evt.target.name;
    this.setState({
      [name]: evt.target.value
    })
  }

  handleSearchSubmit = (evt) =>  {
    evt.preventDefault();
    SearchTournament(this.state.searchTournament)
      .then(maxPageNum => SearchPlayer(this.state.searchTournament, this.state.searchPlayer1, maxPageNum))
      .then(playerResult => {
        console.log("Async problem", playerResult);
        this.setState({ searchResults: playerResult })
      })
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    let getErrorTest = testError(this.state.searchTournament, this.state.searchPlayer1)
    this.setState({ 
      error: [getErrorTest]
    })
  }

  render() {

    const submitSearchHandler = this.state.searchTournament ? this.handleSearchSubmit : this.handleEmptySubmit
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
          searchTournament={this.state.searchTournament}
          searchPlayer1={this.state.searchPlayer1}
          handleSubmit={submitSearchHandler}
        />
        <p>{this.state.searchResults}</p>
      </div>
    );
  }
}

export default App;
