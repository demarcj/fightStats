import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchForm } from "./components/ui-form";
import { loadBracket, SearchTournament, SearchPlayer, loadTournament } from "./lib";

class App extends Component {

  state = {
    currentSearch: "",
    player1Results: "",
    searchResults: "",
    test: ""
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
    const result = SearchPlayer(this.state.player1Results)
      .then(res => {
        this.setState({
          searchResults: res
        })
      })
    // const getTournament = loadTournament(this.state.currentSearch)
    //   .then(res => {
    //     let tournamentName = res.entities.event.map(obj => {
    //       return obj.id;
    //     });
    //     return tournamentName;
    // }).then(q => {
    //     console.log(q);
    //   // this.setState({
    //   //   test: q
    //   // })
    // })

    // this.setState({ test: getTournament });
  }

  handlePlayerName = (evt) => {
    evt.preventDefault();
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    console.log('Nope');
  }

  render() {

    const submitSearchHandler = this.state.currentSearch ? this.handleSearchSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Rankings</h2>
        </div>
        <p className="App-intro">Welcome to Rankings</p>
        <SearchForm
          handleInputChange={this.handleInputChange}
          currentSearch={this.state.currentSearch}
          player1Results={this.state.player1Results}
          handleSubmit={submitSearchHandler}
        />
        <p>{this.state.searchResults}</p>
        <p>{this.state.test}</p>
      </div>
    );
  }
}

export default App;
