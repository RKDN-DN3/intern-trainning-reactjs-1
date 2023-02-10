import React from 'react'
import './MyInfo.css'
import { useSelector } from 'react-redux'
import { myListSelector } from '../../Store/Reducer/MyReducer'
export default function MyInfo() {
    const myList = useSelector(myListSelector)
    return (
        <div className='container-info'>
            <h2 className='h2-info'>User information</h2>
            <div className="cards-container">
                {myList.map((list, index) => (
                    <>
                        <div className='card card-one'>
                            <header>
                                <div className="avatar">
                                    <div className='img-avatar'></div>
                                </div>
                            </header>
                            <h3 key={index.id}>{list.username} {list.name}</h3>
                            <div key={index.id} className="desc">
                                {list.title}
                            </div>
                            <div className="contacts">
                                <a className='a-info' href="#/"><i className="fa-solid fa-plus"></i></a>
                                <a className='a-info' href="#/"><i className="fa-brands fa-whatsapp"></i></a>
                                <a className='a-info' href="#/"><i className="fa-regular fa-envelope"></i></a>
                                <div className="clear"></div>
                            </div>
                            <footer>
                                <a href="#/"><i className="fa-brands fa-square-facebook"></i></a>
                                <a href="#/"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="#/"><i className="fa-brands fa-square-twitter"></i></a>
                                <a href="#/"><i className="fa-brands fa-instagram"></i></a>
                            </footer>
                        </div>

                        <div className="clear"></div>
                    </>
                ))}
            </div>
        </div>
    )
}
