import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyLogin.css'
import { useNavigate } from 'react-router-dom';
// import { hash } from 'bcryptjs';
// import bcrypt from 'bcryptjs';

const MyLogin = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const hashedPassword = await hash(password, 10);
        axios.post('http://localhost:3030/users/login', { email, password })
            .then(response => {
                navigate("/dashboard");
                props.onLogin(); // update parent component state
                localStorage.setItem('foo', 'bar');
                console.log(response.data);
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
                            <input className="Input" type="email" name="email" value={email} onChange={handleEmailChange} required />
                        </div>
                        <div className="Fieldset">
                            <label className="Label" htmlFor="password">Password:</label>
                            <input className="Input" type="password" name="password" value={password} onChange={handlePasswordChange} required />
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
