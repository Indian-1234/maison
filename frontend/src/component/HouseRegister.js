import React, { useState } from 'react';
import { message } from 'antd';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import './HouseReggister.css'


function HouseRegister() {
  const [messageApi, contextHolder] = message.useMessage();
  const [imageSrc, setImageSrc] = useState('');
  const [price, setPrice] = useState('');
  const [squareFeet, setSquareFeet] = useState('');
  const [location, setLocation] = useState('');
  const [bhk, setBhk] = useState('');
  const [furnitureStatus, setFurnitureStatus] = useState('');
  const [age_of_property, setage_of_property] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');
  const [imageUrl1, setImageUrl1] = useState('');
  const [imageUrl2, setImageUrl2] = useState('');
  const [imageUrl3, setImageUrl3] = useState('');
  const [imageUrl4, setImageUrl4] = useState('');
  const [imageUrl5, setImageUrl5] = useState('');
  // const imageUrls = URL.createObjectURL(imageUrl);
  //   setImageSrc(imageUrls);
  const styles = {
    text:{
      marginTop:'30px'
    },
    selectEmpty: {
      marginTop: 8,
    },
    button: {
      backgroundColor: 'blue',
      color: 'white',
      '&:hover': {
        backgroundColor: 'darkblue',
      },
      marginLeft:'100px'
    },
  };
  const handleSubmit = async (event) => {
   
    event.preventDefault();
    const formData = new FormData();
    formData.append('price', price);
    formData.append('sf', squareFeet); 
    formData.append('location', location);
    formData.append('bhk', bhk);
    formData.append('furn_status', furnitureStatus);
    formData.append('age_of_prop', age_of_property);
    formData.append('ty_of_prop', type);
    formData.append('gender', gender);
    formData.append('image1', imageUrl1);
    formData.append('image2', imageUrl2);
    formData.append('image3', imageUrl3);
    formData.append('image4', imageUrl4);
    formData.append('image5', imageUrl5);
    try {
      const response = await axios.post('http://127.0.0.1:8000/house/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-CSRFToken': getCookie('csrftoken'),
          // 'Content-Type': 'application/json',

        }
        
      });
     
      // alert("HOUSE REGISTERED SUCCESSFULLY")
      messageApi.open({
        type: 'success',
        content: 'YOUR HOUSE REGISTERED SUCCESSFULLY!!!',
        duration: 3,
      });
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    }
    
    catch (error) {
      messageApi.open({
        type: 'error',
        content: 'error please enter the valid data',
        duration: 3,
        
      });
    }
  };

  return (
    <div className='body' >
      {contextHolder}
      <center><h1>HOUSE REGISTER</h1>
      <form onSubmit={handleSubmit} className='.form'>
      <TextField sx={styles.text} label="Price" value={price} onChange={(e) => setPrice(e.target.value)} fullWidth/>
      <TextField sx={styles.text} label="Square Feet" value={squareFeet} onChange={(e) => setSquareFeet(e.target.value)} fullWidth/>
      <TextField sx={styles.text} label="Location" value={location} onChange={(e) => setLocation(e.target.value)} fullWidth/>
      <FormControl sx={styles.text} fullWidth>
        <InputLabel>BHK</InputLabel>
        <Select value={bhk} onChange={(e) => setBhk(e.target.value)}>
          <MenuItem value={1}>1 BHK</MenuItem>
          <MenuItem value={2}>2 BHK</MenuItem>
          <MenuItem value={3}>3 BHK</MenuItem>
        </Select>
      </FormControl><br/>
      <FormControl fullWidth sx={styles.text}>
  <InputLabel id="furniture-status-label">Furniture Status</InputLabel>
  <Select labelId="furniture-status-label" value={furnitureStatus} onChange={(e) => setFurnitureStatus(e.target.value)}>
    <MenuItem value="Furnished">Furnished</MenuItem>
    <MenuItem value="Unfurnished">Unfurnished</MenuItem>
  </Select>
</FormControl>

      <TextField sx={styles.text} label="Age of Property" value={age_of_property} onChange={(e) => setage_of_property(e.target.value)} fullWidth/>
      <TextField sx={styles.text} label="Type of Property" value={type} onChange={(e) => setType(e.target.value)} fullWidth/>
      <FormControl sx={styles.text} fullWidth>
        <InputLabel>Gender</InputLabel>
        <Select value={gender} onChange={(e) => setGender(e.target.value)}>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Any">Any</MenuItem>
        </Select>
      </FormControl>
      {/* <TextField label="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} /> 
      */}
       <input style={{marginTop:'40px'}} id="file-input" type="file" onChange={(e) => setImageUrl1(e.target.files[0])} />
       <input style={{marginTop:'40px'}} id="file-input" type="file" onChange={(e) => setImageUrl2(e.target.files[0])} />
       <input style={{marginTop:'40px'}} id="file-input" type="file" onChange={(e) => setImageUrl3(e.target.files[0])} />
       <input style={{marginTop:'40px'}} id="file-input" type="file" onChange={(e) => setImageUrl4(e.target.files[0])} />
       <input style={{marginTop:'40px'}} id="file-input" type="file" onChange={(e) => setImageUrl5(e.target.files[0])} />

       {/* {imageSrc && 
        <img src={imageSrc} alt="Selected Image" style={{ maxWidth: '100%' }} />
      )} */}
      <Button sx={styles.button} variant="contained" color="primary"type="submit">
        Submit
      </Button>
    </form></center>
</div>
  );
}
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
export default HouseRegister;