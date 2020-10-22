import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() { //action.type-----saga 
    yield takeEvery("GET_MOVIE_LIST", movieListSaga)//this action.type was my choice as well as the name of the saga.
    yield takeEvery("GET_GENRE_LIST", genreListSaga)
    yield takeEvery("EDIT_MOVIE", editMovieSaga);
}

function* movieListSaga(action){//when this get is done it comes back as the response
    try{
       const response = yield axios.get('/movie');
       yield put({//yield means do this code behind yield//put is like this.props.dispatch
           type: 'SET_MOVIES',
           payload: response.data//this is what the server sent back
       })
    }catch(error){
        console.log('Error getting movie list from movieListSaga', error);
    }
}
function* genreListSaga(action) {//when this get is done it comes back as the response
    try {
        const response = yield axios.get('/genre');
        yield put({//yield means do this code behind yield//put is like this.props.dispatch
            type: 'SET_GENRES',
            payload: response.data//this is what the server sent back
        })
    } catch (error) {
        console.log('Error getting genre list from genreListSaga', error);
    }
}
function* editMovieSaga(action) {//when this get is done it comes back as the response
    try {
        const response = yield axios.put('/movie', action.payload);
        yield put({//yield means do this code behind yield//put is like this.props.dispatch
            type: 'SET_MOVIES',
            payload: response.data//this is what the server sent back
        })
    } catch (error) {
        console.log('Error EDITING MOVIE from editMovieSaga', error);
    }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {//switch is like "if statement"
        case 'SET_MOVIES'://case is the ===
            return action.payload;
        default:
            return state;
    }// same as saying
    //if(action.type === 'SET_MOVIES"){return action.payload} else{ return state;}
}
const oneMovie = (state = [], action) => {
    switch (action.type) {//switch is like "if statement"
        case 'ONE_MOVIE'://case is the ===
            return action.payload;
        default:
            return state;
    }
}
// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        oneMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
