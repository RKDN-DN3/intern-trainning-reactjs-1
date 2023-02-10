import React from 'react'
import './Home.css'
import logo from '../access/home.png'
import logo2 from '../access/2.jpg'
import logo3 from '../access/3.jpg'
export default function HomePage() {
    return (
        <div className='container-home'>
            <div className='container-lock-home'>
                <div className='container-home-page'>
                    <div className='title-home'>
                        <p>SIMPLE</p>
                        <span>This is a simple project</span>
                    </div>
                    <div className='image-home'>
                        <div className='list-image-home'>
                            <img src={logo} alt='' />
                        </div>
                        <div className='list-image-home'>
                            <img src={logo2} alt='' />
                        </div>
                        <div className='list-image-home'>
                            <img src={logo3} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
