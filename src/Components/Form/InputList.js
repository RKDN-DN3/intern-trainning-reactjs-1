import React, { useState } from 'react'
import { addList } from '../../Store/Reducer/MyReducer'
import { useDispatch } from 'react-redux'
import '../Layout/MyList.css'
export default function InputList() {
    const initialFormState = { id: Math.random(), name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
        console.log(value);
    }

    const dispatch = useDispatch()
    const addSubmit = (event) => {
        event.preventDefault()
        dispatch(addList(user.name, user.username))
    }
    return (
        <div className='form-input'>
            <form onSubmit={addSubmit}>
                <input className='input-add' type="text" name="name"
                    placeholder='Name'
                    value={user.name}
                    onChange={handleInputChange}></input>
                <button type='submit' value='Add' className='btn-add'>Add</button>
                <input className='input-add' type="text"
                    name="username"
                    placeholder='Username'
                    value={user.username}
                    onChange={handleInputChange}></input>
            </form>
        </div >
    )
}
