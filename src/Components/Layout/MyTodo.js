
import { useState, useEffect } from 'react'
import * as React from 'react';
import AddUserForm from '../Form/AddUserForm'
import EditUserForm from '../Form/EditUserForm'
import UserTable from '../Form/UserTable'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
import './MyTodo.css';

export default function MyTodo() {

    //getAllUser from database
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3030/users').then((response) => {
            setUsers(response.data)
        })
    }, [])
    //EDIT
    const [editing, setEditing] = useState(false)
    const initialFormState = { id: null, name: '', username: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const editRow = (user) => {
        setEditing(true)
        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }
    //UPDATE
    const updateUser = (user) => {
        setEditing(false)
        axios.patch(`http://localhost:3030/users/${user.id}`, user) // ,user để lưu vào db
        setUsers(users, user)
    }

    //Delete
    const deleteUser = async (id) => {
        console.log('check id', id);
        try {
            const response = await axios.delete(`http://localhost:3030/users/${id}`)
            if (response) {
                setUsers(users.filter(item => item.id !== id));
                toast.success('Delete Success !');
            } else {
                alert("Delete faild !")
            }
        } catch (error) {
            console.log(error);
        }

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
                            <AddUserForm
                            // addUser={addUser}
                            />
                        </div>
                    )}

                    <div className="flex-large">
                        <h2>View users</h2>
                        <UserTable
                            users={users}
                            deleteUser={deleteUser}
                            editUser={editRow}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
