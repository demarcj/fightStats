import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchForm } from "./components/ui-form";
import { loadBracket } from "./lib/bracketService";

class App extends Component {

  state = {
    currentSearch: '',
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
    loadBracket(Number(this.state.currentSearch))
      .then(response => this.setState({
        searchResults: response.entities.seeds[0].mutations.participants[895842].gamerTag
      }))
      .then(console.log("It works!"))
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
        <p className="App-intro">Welcome 396122</p>
        <SearchForm
          handleInputChange={this.handleInputChange}
          currentSearch={this.state.currentSearch}
          handleSubmit={submitSearchHandler}
        />
        <p>{this.state.searchResults}</p>
      </div>
    );
  }
}

export default App;
