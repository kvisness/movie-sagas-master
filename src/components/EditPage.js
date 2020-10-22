import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

class EditPage extends Component {

    state = {
        editTitle: '',
        editDescription: ''
    }

    onClick = () => {
        this.setState(this.target.value)
    }
    onChange = () => {
        this.setState(this.target.value)
    }
    render() {
        return (
            <>
                <h1>Edit Page</h1>
                <div>
                    <form>
                    <input type="text" placeholder='Edit Title'></input><br />
                    <textarea placeholder="Change Movie Description"></textarea>
                    </form>
                    <NavLink to="/details">Cancel</NavLink>{/*THIS needs to link to the DETAILS page*/}
                    <br />
                    <NavLink to="/">Save</NavLink>{/*THIS will update title and description in db and needs to link to the DETAILS page*/}
                </div>
            </>
        )
    }

}
const mapReduxStateToProps = (globalStore) => ({//coming from the combined reducers
    oneMovie: globalStore.oneMovie,
    genres: globalStore.genres
});
export default connect(mapReduxStateToProps)(withRouter(EditPage));