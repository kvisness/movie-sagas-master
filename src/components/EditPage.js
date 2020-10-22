import React, { Component } from 'react';

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
                    <input type="text" placeholder='Edit Title'></input>
                    <textarea placeholder="Change Movie Description"></textarea>
                    </form>
                    <button >Cancel</button>{/*THIS needs to link to the DETAILS page*/}
                    <button onSubmit>Save</button>{/*THIS will update title and description in db and needs to link to the DETAILS page*/}
                </div>
            </>
        )
    }

}
export default EditPage;