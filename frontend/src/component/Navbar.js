import React, { useState, useEffect } from 'react';
// import {m1} from './images/h1.jpg'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button} from 'antd';
import "./navbar.css"
import { userdetail } from "./Jsondata";
import houselogo from './images/hl.png'

import { Menu } from 'antd';
import { Avatar, Badge, Space } from 'antd';
import { HomeOutlined, UserOutlined, LoginOutlined,LogoutOutlined, InfoCircleOutlined, ShoppingCartOutlined} from '@ant-design/icons';

const Navbar = () => {
  

  // ----------------------------------------

  const navigate = useNavigate();

  // ---------------------------------------------------  API GET NAME---------------//
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const user = await userdetail();
      const gets = user.find(u => u.email==localStorage.getItem('token'));
      setData(gets);     
    };
    getData();
  }, []);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/body');
  };
// ========================
const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
      
      
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/body');
        return newLoadings;
      });
    }, 2000);
    
  };
  return (
    <nav >
      {isLoggedIn ? (
        <>
         <div className='navbar'>
        
     <Menu theme="dark" mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <NavLink to="" style={{textDecoration:'none',color:'white'}}>Home</NavLink>
      </Menu.Item>
      <Menu.Item key="register" icon={<UserOutlined />}>
        <NavLink to="houseregister" style={{textDecoration:'none',color:'white'}}>HomeRegister</NavLink>
      </Menu.Item>
      <Menu.Item key="login" icon={<LoginOutlined />}>
        <NavLink to="" style={{textDecoration:'none',color:'white'}}>{data.username}</NavLink>
      </Menu.Item>
      <Menu.Item key="about" icon={<InfoCircleOutlined />}>
        <NavLink to="about" style={{textDecoration:'none',color:'white'}}>About</NavLink>
      </Menu.Item>
      <Menu.Item key="logout" >
        {/* <button onClick={handleLogout}>LOGOUT</button> */}
        <Button type="primary" icon={<PoweroffOutlined />} loading={loadings[1]} onClick={() => enterLoading(1)}>LOGOUT</Button>

      </Menu.Item>
      <Menu.Item>
      <Avatar shape="square" src="https://imgs.search.brave.com/P46mf09Q1vSfmHxgwIxlJ8CZScr4JlP5uUdYCThRUMc/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/MlhIWkFwamhKdHI3/S2FNUk91WmlRSGFF/NyZwaWQ9QXBp" />
      </Menu.Item>
      <Menu.Item style={{marginLeft:"500px",color:'red',cursor:''}}>
        <NavLink to="" style={{fontSize:'30px',backgroundColor:'none'}} >🄼🄰🄸🅂🄾🄽</NavLink> 
      </Menu.Item>
    </Menu>
   
  </div>
        </>
      ) : (
        <>
          <div className='navbar'>
     <Menu theme="dark" mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <NavLink to="" style={{textDecoration:'none',color:'white'}}>Home</NavLink>
      </Menu.Item>
      <Menu.Item key="login" icon={<LoginOutlined />}>
        <NavLink to="body" style={{textDecoration:'none',color:'white'}}>Login</NavLink>
      </Menu.Item>
      <Menu.Item key="about" icon={<InfoCircleOutlined />}>
        <NavLink to="about" style={{textDecoration:'none',color:'white'}}>About</NavLink>
      </Menu.Item>
      <Menu.Item>
      <Avatar shape="square" src="https://imgs.search.brave.com/P46mf09Q1vSfmHxgwIxlJ8CZScr4JlP5uUdYCThRUMc/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/MlhIWkFwamhKdHI3/S2FNUk91WmlRSGFF/NyZwaWQ9QXBp" />
      </Menu.Item>
      <Menu.Item style={{marginLeft:"800px",color:'red',cursor:''}}>
        <NavLink to="" style={{fontSize:'30px',}}>🄼🄰🄸🅂🄾🄽</NavLink> 
      </Menu.Item>
    </Menu>
  </div>
        </>
      )}
    </nav>
  );
};
export default Navbar;