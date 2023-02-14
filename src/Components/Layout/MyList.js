import React from 'react'
import { useSelector } from 'react-redux'
import { deleteTodo, myListSelector } from '../../Store/Reducer/MyReducer'
import InputList from '../Form/InputList'
import { useDispatch } from 'react-redux'
import './MyList.css'
const MyList = () => {
    const myList = useSelector(myListSelector)
    const dispatch = useDispatch()
    const handleDelete = todoId => {
        dispatch(deleteTodo(todoId))
        // console.log(todoId);
    }
    return (
        <div className="container">
            <div className='home-add'>
                <div className="flex-row">
                    <div className="flex-large1 form-list">
                        <h2>Add user</h2>
                        <InputList />
                    </div>

                    <div className="flex-large">
                        <h2>View users</h2>
                        {myList.length > 0 ?
                            (myList.map((list, index) => (
                                <li key={list.id} className="table-row-table">
                                    <div className="col col-1 col-table">{index + 1}</div>
                                    <div className="col col-2 col-table">{list.name}</div>
                                    <div className="col col-2 col-table">{list.username}</div>
                                    <button onClick={handleDelete.bind(this, list.id)} className='btn-delete-reudx'>Delete</button>
                                </li>
                            ))) : (
                                <div className="col ">No user</div>
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyList