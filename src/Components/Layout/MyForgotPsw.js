import React from 'react'
import './MyForgotPsw.css'
import iconpsw from '../access/icon-forgot.png'
import yourLogo from '../access/your-logo.png'


export default function MyForgotPsw() {
    return (
        <div className='container-forgot'>
            <div className='content-top-forgot'>
                <div className='content-icon-forgot'>
                    <img className='image-psw' src={iconpsw} alt=''></img>
                    <div className='title-forgot'>Resest Your Password</div>
                    <span>We received a request to reset your password. Don’t worry,
                        we are here to help you.
                    </span>
                    <input id="email" className="input" placeholder='Email'></input>
                    <button type='submit'>Reset My Password</button>
                    <p>Didn’t request a password reset?
                        You can safely ignore this message.
                    </p>
                </div>
            </div>
            <div className='content-mid-forgot'>
                <div className='your-logo'>
                    <img src={yourLogo} alt=''></img>
                </div>
                <div className='content-network'>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-regular fa-envelope"></i>
                </div>
                <div className='content-note'>
                    <p>Copyright © 2021 Your Brand, All rights reserved.</p>
                    <p> Where to find us: 2047 Roosevelt Road</p>
                    <p>Changed your mind? You can unsubscribe at any time.</p>
                </div>
            </div>
        </div>
    )
}
