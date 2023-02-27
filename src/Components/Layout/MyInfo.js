import React, { useState, useEffect } from 'react'
import './MyInfo.css'
import { useSelector } from 'react-redux'
import { myListSelector } from '../../Store/Reducer/MyReducer'
import { Link } from 'react-router-dom'
import axios from "axios";

export default function MyInfo() {
    const myList = useSelector(myListSelector)

    //getAllUser from database
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3030/users').then((response) => {
            setUser(response.data)
        })
    }, [])

    return (
        <div className='container-info'>
            <article className="leaderboard">
                <header>
                    <h1 className="leaderboard__title"><span className="leaderboard__title--top">Forbes</span>
                        <span className="leaderboard__title--bottom">User</span></h1>
                </header>
                <main className="leaderboard__profiles">
                    {user && user.length > 0 && user.map(list => (
                        <Link key={list.id} className='item-info' to={{ pathname: `/profile/${list.id}/info` }}>
                            <article className="leaderboard__profile">
                                <img src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100) + 1}.jpg`}
                                    alt="Mark Zuckerberg" className="leaderboard__picture" />
                                <span className="leaderboard__name">{list.username} {list.name}</span>
                                <span className="leaderboard__value">{list.email}</span>
                            </article>
                        </Link>
                    ))}
                </main>
            </article>
        </div>



    )
}

//src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100) + 1}.jpg`} random image