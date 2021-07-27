import React, { useState } from 'react';
import './Login.scss';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../actions/user_action'
import axios from 'axios';

const Login = (props) => {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (event) => {
        const {name, value} = event.target;
        if (name === 'id') setId(value);
        else setPassword(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        let body = {
            email : id,
            password 
        }

        axios.post('https://37d5fc7b4162.ngrok.io/api/users/login', body)
           .then(response => response.data)
           .then(response => {
              console.log(response) 
            
               if (response.loginSuccess) props.history.push('/landing');
               else alert("Error");
               
            })
    }

    return (
        <div className="LoginBlock">
            <h1>Login</h1>
            <form className="loginform" onSubmit={onSubmit}>
                <div className="txt_field">
                    <input type="text" name="id" value={id} onChange={onChange} required/>
                    <label>Username</label>
                </div>
                <div className="txt_field">
                    <input type="password" name="password" value={password} onChange={onChange} required />
                    <label>Password</label>
                </div>
                <div>
                    <span>Create Account</span>
                </div>
                <div className="Login">
                    <button className="loginBtn">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;