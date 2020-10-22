import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';


class DetailsPage extends Component {

    filteredMovie = this.props.genres.filter((movieIndex) => //one movie is the object with the keys inside
        movieIndex.id === this.props.oneMovie.id)

    //  backToHomeClick =(event)=>{
    //     history.push('/')
    // }

    render() {

        return (
            <>
                <h1>Details Page</h1>
                <div>
                    <div>
                        <p>{this.props.oneMovie.title}{this.props.oneMovie.description} <img src={this.props.oneMovie.poster} alt=''></img></p>
                    </div>
                    <NavLink to="/">Back to List</NavLink>{/*THIS needs to link to the HOME page*/}
                    <br />
                    <NavLink to="/edit">Edit page</NavLink>{/*THIS needs to link to the EDIT page*/}
                    <ul>
                        {this.filteredMovie[0] !== undefined && this.filteredMovie[0].movie_genres.map(genre=> <li>{genre}</li>)
                        }
                    </ul>
                    
                </div>
            </>
        )
    }

}
const mapReduxStateToProps = (globalStore) => ({//coming from the combined reducers
    oneMovie: globalStore.oneMovie,
    genres: globalStore.genres
});
export default connect(mapReduxStateToProps)(withRouter(DetailsPage));