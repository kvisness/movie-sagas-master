import React, {Component} from 'react';
import {connect} from 'react-redux';
class HomePage extends Component {

componentDidMount() {//started here to get the list of movies from saga/reducer, this dispatch will get caught by the root saga
    this.props.dispatch({
        type: 'GET_MOVIE_LIST'//this type must match the saga that I am targeting.
    })
        
    
    
}
render(){
    return(
        <>
        <h1>Home Page</h1>
        <div>
            {/*THIS IS WHERE ALL THE MOVIES SHOW*/}
                {/*THIS needs to link to the DETAILS page*/}
        </div>
        </>
    )
}

}
export default connect ()(HomePage);