import React, { useState } from 'react';
import axios from 'axios';
import './MyLogin.css'
import { useNavigate } from 'react-router-dom';
import { Menu } from '@radix-ui/react-menubar';
import Sidebar from '../Views/Sidebar'

const MyLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3030/users/login', { email, password })
            .then(response => {
                console.log(response.data);
                setIsLoggedIn(true);
                navigate("/dashboard");
            })
            .catch(error => {
                console.log(error);
                setError('Invalid email or password !');
            });
    }

    return (
        <>
            <div className='container-login' >
                <div className='content-login'>
                    <form className="form-tab-register" onSubmit={handleSubmit}>
                        <div className="Fieldset">
                            <label className="Label" htmlFor="email">Email:</label>
                            <input className="Input" type="email" name="email" id="email" value={email} onChange={handleEmailChange} required />
                        </div>
                        <div className="Fieldset">
                            <label className="Label" htmlFor="password">Password:</label>
                            <input className="Input" type="password" name="password" id="password" value={password} onChange={handlePasswordChange} required />
                        </div>
                        {error && <p className='err-login'>{error}</p>}
                        <button className="btn-myregister btn-btnlogin" type="submit">Log in</button>
                        <span className="or-singin or-login">Or Sing In with ?</span>
                        <div className="face face-login">
                            <div className="sing-or"><i className="fa-brands fa-facebook-f"></i>FaceBook</div>
                            <div className="sing-or"><i className="fa-brands fa-twitter"></i>Twitter</div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default MyLogin;
