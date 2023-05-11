import React, { useState,useEffect,useRef } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { Input } from 'antd';
const MyForm = () => {
  const [username, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [storeotps, setStoreotps] = useState('');
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(30);

  const otps=Math.floor(100000 + Math.random() * 900000)
  // const form,forms = useRef();


  const emailData = {
    email,
    otps
  };
  // count the wait otp###################################
  useEffect(() => {
    let timer = null;
    if (clicked && count > 0) {
      timer = setInterval(() => {
        setCount(count - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [clicked, count]);
  // send email ################################################
  const sendEmail = () => { 
    if (!clicked) {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
        setCount(30);
      }, 30000); // 30 seconds
    }

    setStoreotps(otps)
    emailjs.send('service_9zzj753', 'template_kwi41za',emailData, 'd_JSHKX0gj5QrFXO3')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
          alert("error")
      });
  };
// ###########################################    API FETCH ##########################
const handleSubmit = async () => {

  const formData = new FormData();
  formData.append('username', username);
  formData.append('email', email);
  formData.append('password',password);
    try {
      if (otp==storeotps){
        await axios.post('http://127.0.0.1:8000/user/', formData, {
        
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-CSRFToken': getCookie('csrftoken'),
          // 'Content-Type': 'application/json',

        }
      });
  
     const users = JSON.parse(localStorage.getItem('users')) || [];
     users.push({ username, email, password });
     localStorage.setItem('users', JSON.stringify(users));
     setuserName('');
     setEmail('');
     setPassword('');
     alert("registed successfully !!!")
     window.location.reload();
     

    }
    else{
      alert("incorrect otp")
    }
      }
      
      catch (error) {
      alert("ALREADY YOUR USERNAME OR EMAIL ARE REGISTERD")
    }
  
  }
  //  button delay


  return (
    
    <form>
    <label>Name:</label>
    <Input type="text" required value={username} onChange={(e) => setuserName(e.target.value)}  name='email'/>
   <label>Password:</label>
     <Input required type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
   <br/>
    <label>Email:</label>
     <Input type="email" required name='user_email' value={email} onChange={(e) => setEmail(e.target.value)}  />
     <label>OTP:</label>
     <Input type='text' required value={otp} onChange={(e) => setOtp(e.target.value)} ></Input> 
    <input
      type="button"
      value={clicked ? `Please wait ${count} seconds` : "SEND OTP"}
      onClick={sendEmail}
      disabled={clicked}
    />
   <center>   <input type="button" value="submit" onClick={handleSubmit} style={{marginBottom:'50px'}} required/><br></br></center>
 
   
 </form>
  );

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

};

export default MyForm;
