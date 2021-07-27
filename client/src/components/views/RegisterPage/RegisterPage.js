import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../actions/user_action'
import axios from 'axios';

    

const RegisterPage = (props) => {
    const dispatch = useDispatch();
    
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirm, setConfirm] = useState('');

    const onChange = (event) => {
        const {name, value} = event.target;
        if (name === 'id') setId(value);
        else if (name === 'password') setPassword(value);
        else if (name === 'confirm') setConfirm(value);
        else setName(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== confirm) return alert("비밀번호가 같아야 합니다");

        let body = {
            email : id,
            password,
            name,
            confirm
        }
        axios.post('https://37d5fc7b4162.ngrok.io/api/users/register', body)
           .then(response => response.data )
           .then(data =>  {
               console.log(data);
               if (data.success) props.history.push('/');
           })
        
    }
    

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'CENTER'
            , width: '100%', height: '100vh'
        }}>
          <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmit}>
              <label>Name</label>
              <input type="text"  name='name' value={name} onChange={onChange} />
              
              <label>ID</label>
              <input type="text" name='id' value={id} onChange={onChange} />
              
              <label>Password</label>
              <input type="password" name='password' value={password} onChange={onChange} />
              
              <label>Confirm Password</label>
              <input type="password" name='confirm' value={confirm} onChange={onChange} />
              
              <br />
              <button type="submit">
                  회원가입
              </button>
          </form>
        </div>
    )
}

export default RegisterPage