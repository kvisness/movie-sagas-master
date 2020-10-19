
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import HomePage from '../HomePage';

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
        
        <HomePage/>
      </div>
    );
  }
}

export default App;
