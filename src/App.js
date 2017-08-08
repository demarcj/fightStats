import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchForm } from "./components/ui-form";
import { SearchTournament, SearchPlayer, testError } from "./lib";

class App extends Component {

  state = {
    error: "",
    searchTournament: "",
    searchPlayer1: "",
    searchResults: "",
    setTournament: ""
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
      .then(resTournament => SearchPlayer(this.state.searchPlayer1, resTournament))
      .then(res => {
        console.log("res", res);
        this.setState({ searchResults: res });
      });
  }

  // handlePlayerName = (evt) => {
  //   evt.preventDefault();
  //   const getPlayer1Name = SearchPlayer(this.state.searchPlayer1, this.state.setTournament)
  //     .then(res => {
  //       this.setState({ searchResults: res });
  //   });
  // }

  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    // let setError = ""
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
