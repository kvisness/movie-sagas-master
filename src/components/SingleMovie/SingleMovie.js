import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
//import { NavLink } from 'react-router-dom';



class SingleMovie extends Component {
//this component shows the whole object

    click = (event) => {
        this.props.dispatch({
            type: 'ONE_MOVIE',
            payload: this.props.oneMovie
        })
        console.log(this.props.oneMovie);
         this.props.history.push('/details') 
    }
    render() {
        return (
            <>
                
                <div>
                     <li>{this.props.oneMovie.title} <img src={this.props.oneMovie.poster} alt=''></img><button onClick={this.click}>Read More</button></li>
                </div>
            </>
        )
    }

}
const mapReduxStateToProps = (globalStore) => ({//coming from the combined reducers
    movies: globalStore.movies
});

export default connect(mapReduxStateToProps)(withRouter(SingleMovie));