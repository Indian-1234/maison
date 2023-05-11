import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css';
import { Input,Button } from 'antd';

const Login = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState('');

  // ------------------------------------------ API Login ---------------------------------//
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/user/';
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // ----------------------------------------- END USER ------------------------------------//

  const handleLogin = (e) => {
    alert('hi')
    e.preventDefault();
    const token = email;

    const gets = data.find(u => u.email ===email);
    setUserData(gets);

    if (gets && gets.password === password) {
      localStorage.setItem('token', token);
      window.location.href = '/';
    } else {
      alert('Invalid email or password.');
    }
  };
  
  return (
    <form onSubmit={handleLogin}>
      <label>
        Email:
      </label>
      <Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <Input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
<br/><br/>
      <center><button type='submit' style={{backgroundColor:'blue'}} >Login</button></center>
    </form>
  );
};

export default Login;
