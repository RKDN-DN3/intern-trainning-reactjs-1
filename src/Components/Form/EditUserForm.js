import React, { useState } from 'react'
const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <form
        // onSubmit={(event) => {
        //     event.preventDefault()

        //     props.updateUser(user.id, user)
        // }}
        >
            {/* <label>Name</label> */}
            <div className='add-name'>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                />
            </div>
            {/* <label>Username</label> */}
            <div className='add-username'>
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                />
            </div>
            <div className='btn'>
                <button className='btn-update'
                    onClick={() => props.updateUser(user.id, user)}
                >
                    Update user
                </button>
                <button
                    onClick={() => props.setEditing(false)}
                    className="btn-cancel"
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default EditUserForm