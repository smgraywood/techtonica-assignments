import React from 'react'


function DeleteUser({ deleteUserCallback }) {
    const [deleteId, userDeleteId] = React.useState('')

    return(
        <div>
            <h3>Delete User</h3>
            <form id="delete-user" action="#">
                <fieldset>
                <label>User ID</label>
                <input type="text" id="delete-user-id" />
                </fieldset>
                <input type="submit" onClick = {(e) => {
                    e.preventDefault(); 
                    deleteUserCallback(deleteId);
                     }}/>
            </form>
    </div>
    )
}

export default DeleteUser