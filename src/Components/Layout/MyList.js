import React from 'react'
import { useSelector } from 'react-redux'
import { myListSelector } from '../../Store/Reducer/MyReducer'
import InputList from '../Form/InputList'
import './MyList.css'
const MyList = () => {
    const myList = useSelector(myListSelector)
    return (
        <div class="container-myList">

            <h2 className='title-myList'>My List</h2>
            <ul class="responsive-table-myList">
                <InputList />
                <li class="table-header-myList">
                    <div class="col col-1">Stt</div>
                    <div class="col col-2">Name</div>
                    <div class="col col-3">Username</div>
                    <div class="col col-4">Total MyList - {myList.length}</div>
                </li>
                {myList.map((list, index) => (
                    <li key={list.id} class="table-row">
                        <div class="col col-1">{index + 1}</div>
                        <div class="col col-2">{list.name}</div>
                        <div class="col col-3">{list.username}</div>
                        <div class="col col-4"></div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MyList