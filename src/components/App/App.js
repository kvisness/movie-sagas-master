
import React, { Component } from 'react';
import './App.css';
//import axios from 'axios';
import HomePage from '../HomePage';
import {HashRouter as Router, Route} from 'react-router-dom';
import DetailsPage from '../DetailsPage';
import EditPage from '../EditPage';


class App extends Component {


  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route exact path='/details'>
            <DetailsPage />
          </Route>
          <Route exact path='/edit'>
            <EditPage />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
