import Axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
     movies: []
  }

  componentDidMount = () => this.movies

  getMovieList = () => {
    this.setState({ movies: []});
    axios.get('/')//WHAT'S THE CORRECT PATH HERE??
    .then( (response) =>{
    console.log('In App.js axios.get', response);
  }).catch((error) =>{
    console.log(error)
  });
}
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
      </div>
    );
  }
}

export default App;
