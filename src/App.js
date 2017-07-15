import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchForm } from "./components/ui-form";
import { loadBracket } from "./lib/bracketService";

class App extends Component {

  state = {
    info: "",
  }

  handleInputChange = (evt) => {
    evt.preventDefault();
    console.log("test", evt);
    const name = evt.target.name;
    this.setState({
      [name]: evt.target.value
    })
  }

  handleSearchSubmit = (evt) =>  {
    evt.preventDefault();
    console.log(evt.target)
    const searchButton = evt.target.id;
    loadBracket(Number(this.state.currentSearch))
    .then(response => this.setState({
      [searchButton]: response,
    }))
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
        <p className="App-intro">Welcome {this.state.info}</p>
        <SearchForm
          handleInputChange={this.handleInputChange}
          currentSearch={this.state.currentSearch}
          handleSubmit={submitSearchHandler}
        />
      </div>
    );
  }
}

export default App;
