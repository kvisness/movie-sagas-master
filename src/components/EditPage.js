import React, { Component } from 'react';

class EditPage extends Component {

    render() {
        return (
            <>
                <h1>Edit Page</h1>
                <div>
                    <form>
                    <input type="text" id='editPage' name='editPate'></input>
                    <textarea placeholder="Change Movie Description"></textarea>
                    </form>
                    <button>Cancel</button>{/*THIS needs to link to the DETAILS page*/}
                    <button>Save</button>{/*THIS will update title and description in db and needs to link to the DETAILS page*/}
                </div>
            </>
        )
    }

}
export default EditPage;