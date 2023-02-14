
import { useState } from 'react'
import * as React from 'react';
import AddUserForm from '../Form/AddUserForm'
import EditUserForm from '../Form/EditUserForm'
import UserTable from '../Form/UserTable'
import { myListSelector } from '../../Store/Reducer/MyReducer';
import { useSelector } from 'react-redux'
import './MyTodo.css'
export default function MyTodo() {
    const usersData = useSelector(myListSelector)

    //CREATE
    const [users, setUsers] = useState(usersData)
    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }
    //DELETE
    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    //EDIT
    const [editing, setEditing] = useState(false)
    const initialFormState = { id: null, name: '', username: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const editRow = (user) => {
        setEditing(true)
        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
    }


    return (
        <div className="container">
            <div className='home-add'>
                <div className="flex-row">
                    {editing ? (
                        <div className='home-add-user'>
                            <h2>Upload info</h2>
                            <EditUserForm
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                        <div className="flex-large1">
                            <h2>Add user</h2>
                            <AddUserForm addUser={addUser} />
                            {/* <div className='image-add-user' /> */}
                        </div>
                    )}

                    <div className="flex-large">
                        <h2>View users</h2>
                        <UserTable
                            users={users}
                            deleteUser={deleteUser}
                            editRow={editRow} />
                    </div>
                </div>
            </div>

        </div>
    )
}
