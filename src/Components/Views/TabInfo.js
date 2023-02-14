import React from 'react'
import './TabInfo.css'
import { useSelector } from 'react-redux'
import { myListSelector } from '../../Store/Reducer/MyReducer'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
export default function TabInfo() {
    const myList = useSelector(myListSelector)
    const navigate = useNavigate();
    const { id } = useParams();
    return (
        <div className='container-view-info'>
            <p>View Info</p>
            <div className='info-container'>
                <div className='view-info'>
                    {myList.map(list => {
                        if (id === `${list.id}`) {
                            return (
                                <div key={list.id}>
                                    <img src={list.image} className='avt' alt='' />
                                    <div className='info-user' >
                                        <label>Name</label>
                                        <div className='item-info'>
                                            <span>{list.name} {list.username}</span>
                                        </div>
                                        <label>Email</label>
                                        <div className='item-info'>
                                            <span>{list.email}</span>
                                        </div>

                                        <label>Title</label>
                                        <div className='item-info'>
                                            <textarea disabled value={list.title}>
                                                {list.title}
                                            </textarea>
                                        </div>
                                    </div>
                                </div >
                            )
                        }
                    })}
                    <button onClick={() => navigate(-1)} className='btn-back'>Back<i className="fa-solid fa-angles-left"></i></button>

                </div>
                <div className='view-contact'>
                    <lable>Contact Us</lable>
                    <div className='info-contact'>
                        <span className='pen-contact'><i className="fas fa-map-marker-alt"></i>Address: 198 West 21th Street, Suite 721 New York NY 10016</span>
                        <span className='pen-contact'><i className="fas fa-phone"></i>Phone: + 1235 2355 98 </span>
                        <span className='pen-contact'><i className="fas fa-globe-americas"></i>Website yoursite.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
