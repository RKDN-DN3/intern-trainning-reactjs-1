import React, { useState } from 'react'
import { addList } from '../../Store/Reducer/MyReducer'
import { useDispatch } from 'react-redux'
import '../Layout/MyList.css'
export default function InputList() {
    const initialFormState = { id: Math.random(), name: '', username: '', title: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
        console.log(value);
    }

    const dispatch = useDispatch()
    const addSubmit = (event) => {
        event.preventDefault()
        if (!user.name || !user.username) {
            alert('missing input')
            return
        } else {

            dispatch(addList(user.name, user.username, user.title, user.email))
            setUser({
                name: '',
                username: '',
                title: '',
                email: ''
            })
        }
    }
    return (
        <div className='form-input'>
            <form onSubmit={addSubmit}>
                <div className="Fieldset">
                    <input className="Input" type="text" name="name"
                        placeholder='Name'
                        value={user.name}
                        onChange={handleInputChange} />
                    <input className="Input" type="text"
                        name="username"
                        placeholder='Username'
                        value={user.username}
                        onChange={handleInputChange} />
                </div>
                <div className="Fieldset">
                    <input className="Input" type="email" name="email"
                        placeholder='Email'
                        value={user.email}
                        onChange={handleInputChange} />
                </div>
                <button type='submit' value='Add' className='btn-add add-input'>Add new user</button>
            </form>
            <textarea className='class-title' type="text"
                name="title"
                placeholder='Title'
                value={user.title}
                onChange={handleInputChange} />
        </div >
    )
}
