import React, { useState } from 'react'
import { editList } from '../../Store/Reducer/MyReducer'
// import { editList } from '../../Store/Actions/Action'
import { useDispatch } from 'react-redux'
import '../Layout/MyList.css'
export default function EditInput(props) {
    const [user, setUser] = useState(props.currentUser)
    // console.log(user)
    const handleOnchange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
        // console.log(value);
    }
    // console.log('check editlist', editList);

    const dispatch = useDispatch()
    // const editSubmit = (event) => {
    //     event.preventDefault()
    //     if (!user.name || !user.username) {
    //         alert('missing input')
    //         return
    //     } else {
    //         dispatch(editList(user))
    //         // console.log(user);
    //         props.setEditing(false)
    //         setUser({
    //             name: '',
    //             username: '',
    //             title: '',
    //             email: ''
    //         })
    //         console.log(editList(user));
    //     }
    // }
    return (
        <div className='form-input input-edit'>
            <form
            >
                <div className="Fieldset">
                    <input className="Input" type="text" name="name"
                        placeholder='Name'
                        value={user.name}
                        onChange={handleOnchange}
                    />
                    <input className="Input" type="text"
                        name="username"
                        placeholder='Username'
                        value={user.username}
                        onChange={handleOnchange} />
                </div>
                <div className="Fieldset">
                    <input className="Input" type="email" name="email"
                        placeholder='Email'
                        value={user.email}
                        onChange={handleOnchange} />
                </div>
                <button onClick={() => props.updateUser(user)} type='submit' value='Add' className='btn-add add-input btn-update'>Upload info</button>
                <button onClick={() => props.setEditing(false)} className="btn-cancel">Cancer</button>
            </form>
            <textarea className='class-title' type="text"
                name="title"
                placeholder='Title'
                value={user.title}
                onChange={handleOnchange} />
        </div >
    )
}
