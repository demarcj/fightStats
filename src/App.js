import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchForm } from "./components/ui-form";
import { loadBracket } from "./lib/bracketService";

class App extends Component {

  state = {
    currentSearch: '',
    info: "",
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
    this.setState({
      info: document.getElementById("search").value
    });
    loadBracket(Number(this.state.currentSearch))
      .then(response => console.log(response))
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
