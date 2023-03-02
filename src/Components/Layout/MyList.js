import React, { useState, useEffect } from 'react'
import InputList from '../Form/InputList'
import { useDispatch } from 'react-redux'
import './MyList.css'
import EditInput from '../Form/EditInput'
import axios from "axios";



const MyList = () => {
    // const myList = useSelector(myListSelector)
    const dispatch = useDispatch()


    //EDIT
    const [editing, setEditing] = useState(false)
    const initialFormState = { id: null, name: '', username: '', title: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)
    const handleEdit = (todoId) => {
        setEditing(true)
        setCurrentUser({
            id: todoId.id, name: todoId.name, username: todoId.username,
            title: todoId.title, email: todoId.email
        })
    }

    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3030/users').then((response) => {
            setUser(response.data)
            // console.log('check list user', response.data);
        })

    }, [])
    // const handleDelete = todoId => {
    //     // dispatch(deleteTodo(todoId))
    //     axios
    //         .delete(`http://localhost:3030/users/${todoId}`)
    //     setUser(user);
    //     alert('deleted successfully!')
    //     // console.log('check id', todoId);
    // }
    const handleDelete = (todoId) => {
        console.log('check id', todoId.id);
        // fetch(`http://localhost:3030/users/${todoId}`, {
        //     method: 'DELETE'
        // })
        //     .then(response => response.json())
        //     .then(() => {
        //         const updatedBooks = user.user.filter(item => item.todoId !== todoId)
        //         setUser(updatedBooks)
        //     })
    }
    return (
        <div className="container">
            <div className='home-add todo-redux'>
                <div className="flex-row row-redux">
                    {editing ? (
                        <div className="flex-large1 form-list list-edit">
                            <h2>Edit user</h2>
                            <EditInput
                                currentUser={currentUser}
                                setEditing={setEditing}
                            />
                        </div>
                    ) : (
                        <div className="flex-large1 form-list">
                            <h2>Add user</h2>
                            <InputList
                            />
                        </div>
                    )}
                    <div className="flex-large">
                        <h2>View users</h2>
                        <div className='Add-user'>
                            {user.length > 0 ?
                                (user.map((list, index) => (
                                    <li key={list.id} className="table-row-table">
                                        <div className="col col-1 col-table">{index + 1}</div>
                                        <div className="col col-2 col-table">{list.name}</div>
                                        <div className="col col-2 col-table">{list.username}</div>
                                        <button onClick={handleDelete.bind(this, list)} className='btn-delete-reudx'>Delete</button>
                                        <button onClick={handleEdit.bind(this, list)} className='btn-Edit-reudx'>Edit</button>
                                    </li>
                                ))) : (
                                    <div className="col ">No user</div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyList