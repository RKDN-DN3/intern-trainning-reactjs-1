import React from 'react'
import './UserTable.css'
const UserTable = (props) => (

    <table className='user-table'>
        {/* <thead>
            <li class="table-header-user-table">
                <div class="col col-1">Stt</div>
                <div class="col col-2">Username</div>
                <div class="col col-2">Name</div>
                <div class="col col-4">Action</div>
            </li>
        </thead> */}
        <tbody className='table-view'>
            {props.users.length > 0 ?
                (
                    props.users.map((user, index) => (
                        <li key={user.id} class="table-row-table">
                            <div class="col col-1 col-table" >{index + 1}</div>
                            <div class="col col-2 col-table">{user.username}</div>
                            <div class="col col-2 col-table">{user.name}</div>
                            <div class="col col-4 btn-table">
                                <button className="btn-edit"
                                    onClick={() => {
                                        props.editRow(user)
                                    }}
                                >Edit
                                </button>
                                <button className="btn-delete"
                                    onClick={() => props.deleteUser(user.id)}
                                >Delete
                                </button>
                            </div>
                        </li>
                    ))
                )
                :
                (
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )
            }
        </tbody>
    </table>
)

export default UserTable