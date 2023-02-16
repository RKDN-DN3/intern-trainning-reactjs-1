import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { deleteTodo, myListSelector, editList } from '../../Store/Reducer/MyReducer'
import InputList from '../Form/InputList'
import { useDispatch } from 'react-redux'
import { newList } from '../../Store/Actions/Action'
import './MyList.css'
import EditInput from '../Form/EditInput'
const MyList = () => {
    const myList = useSelector(myListSelector)
    const [users, setUsers] = useState(myList)
    const dispatch = useDispatch()

    const handleDelete = todoId => {
        dispatch(deleteTodo(todoId))
    }

    //EDIT
    const [editing, setEditing] = useState(false)
    const initialFormState = { id: null, name: '', username: '', title: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const handleEdit = (todoId) => {
        // dispatch(editList(todoId))
        setEditing(true)
        setCurrentUser({
            id: todoId.id, name: todoId.name, username: todoId.username,
            title: todoId.title, email: todoId.email
        })
        // handleSelectTodo(todoId)
    }
    const updateUser = (todoId) => {
        setEditing(false)
        setUsers(dispatch(editList(todoId)))
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
                                updateUser={updateUser}
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
                            {myList.length > 0 ?
                                (myList.map((list, index) => (
                                    <li key={list.id} className="table-row-table">
                                        <div className="col col-1 col-table">{index + 1}</div>
                                        <div className="col col-2 col-table">{list.name}</div>
                                        <div className="col col-2 col-table">{list.username}</div>
                                        <button onClick={handleDelete.bind(this, list.id)} className='btn-delete-reudx'>Delete</button>
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