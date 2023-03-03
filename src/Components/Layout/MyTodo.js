
import { useState, useEffect } from 'react'
import * as React from 'react';
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
    const updateUser = async (user) => {
        setEditing(false)
        const response = await axios.patch(`http://localhost:3030/users/${user.id}`, user) // ,user để lưu vào db
        if (response) {
            axios.get('http://localhost:3030/users').then((response) => {
                setUsers(response.data)
            })
        }
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
                    {editing === true ? (
                        <>
                            <h2 className='title-update'>UpDate User</h2>
                            <EditUserForm
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            /></>
                    ) : (
                        <div className="flex-large">
                            <h2 className='title-view'>View Users</h2>
                            <UserTable
                                users={users}
                                deleteUser={deleteUser}
                                editUser={editRow}
                            />
                        </div>)}
                </div>
            </div>
        </div>
    )
}