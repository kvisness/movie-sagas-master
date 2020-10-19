import React, { Component } from 'react';

class DetailsPage extends Component {

    render() {
        return (
            <>
                <h1>Details Page</h1>
                <div>
                    <button>Back to list</button>{/*THIS needs to link to the HOME page*/}
                    <button>Edit</button>{/*THIS needs to link to the EDIT page*/}
                </div>
            </>
        )
    }

}
export default DetailsPage;