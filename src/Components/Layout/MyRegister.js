import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import "./MyRegister.css";
const MyRegister = () => {
    const [formData, setFormData] = useState({
        id: Math.floor(Math.random() * 999) + 1,
        email: '',
        password: '',
        name: '',
        username: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(formData);
        axios.post('http://localhost:3030/users/register', formData)
            .then(response => {
                console.log('check res.data', response.data); //thong tin lay tu input
                toast.success('Create a new User Success !');
                setFormData({
                    email: '',
                    password: '',
                    name: '',
                    username: ''
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className='container-register'>
            <div className='tab-register'>
                <form className="form-tab-register" onSubmit={handleSubmit}>
                    <div className='form-input-rg'>
                        <div className="form-group">
                            <label className="Label lable-register" htmlFor="email">Email:</label>
                            <input className="Input" type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required />
                        </div>
                        <div className='form-group'>
                            <label className="Label lable-register" htmlFor="password">Password:</label>
                            <input className="Input" type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} required />
                        </div>
                        <div className='form-group'>
                            <label className="Label lable-register" htmlFor="name">Name:</label>
                            <input className="Input" type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} required />
                        </div>
                        <div className='form-group'>
                            <label className="Label lable-register" htmlFor="username">Username:</label>
                            <input className="Input" type="text" name="username" id="username" value={formData.username} onChange={handleInputChange} required />
                        </div>
                    </div>
                    <button className="btn-myregister" type="submit">Submit</button>
                    <Link className='forgot-psw' to="/forgot">Forgot Password</Link>
                    <span className="or-singin">Or Sing In with ?</span>
                    <div className="face">
                        <div className="sing-or"><i className="fa-brands fa-facebook-f"></i>FaceBook</div>
                        <div className="sing-or"><i className="fa-brands fa-twitter"></i>Twitter</div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MyRegister;


