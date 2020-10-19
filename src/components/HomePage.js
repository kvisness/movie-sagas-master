import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {NavLink} from 'react-router-dom';
import SingleMovie from './SingleMovie/SingleMovie';



class HomePage extends Component {

componentDidMount() {//started here to get the list of movies from saga/reducer, this dispatch will get caught by the root saga
    this.props.dispatch({
        type: 'GET_MOVIE_LIST'//this type must match the saga that I am targeting.
    })
    this.props.dispatch({
        type: 'GET_GENRE_LIST'
    })
    
}

 click = (event) => {
    console.log(event.target.value);
}
render(){
    return(
        <>
        <h1>Home Page</h1>
        <div>
            <ul>
                {this.props.movies.map((oneMovie)=>{//one movie is the object with the keys inside
                    return <SingleMovie oneMovie={oneMovie} />
                })}{/*param is only one part of the array, then access the keys */}
            </ul>
            {/* <button onClick={this.props.history.push('/details')}></button> */}
            <NavLink to='/details'>Details</NavLink>
                {/*THIS needs to link to the DETAILS page*/}
        </div>
        </>
    )
}

}
const mapReduxStateToProps = (globalStore) => ({//coming from the combined reducers
    movies: globalStore.movies
});

export default connect(mapReduxStateToProps)(withRouter(HomePage));