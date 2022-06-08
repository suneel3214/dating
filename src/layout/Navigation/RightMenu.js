import React,{useState,useContext, useEffect} from 'react';
import { Menu ,Popover,Drawer} from 'antd';
import {
  Button
} from "@mui/material";
import './navigation_style.css';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import Cookies  from "js-cookie";
import useAuth from "../../hooks/useAuth";
import { useHistory } from 'react-router-dom';
import {UserContext} from './../../App';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const RightMenu = () => { 
const {state,dispatch} = useContext(UserContext);
const [isLogin , setIsLogin] = useState(false);

const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

useEffect(()=>{
  checkAuth()
},[state])

const checkAuth = () => {
  var token =  Cookies.get('token');
  if(token){
    setIsLogin(true);
  }else{
    setIsLogin(false);
  }
}

  const history = useHistory();
  const { getUserLogout } = useAuth();

  const onLogout = (data) => {
      getUserLogout(data);
      localStorage.removeItem('data');
      Cookies.remove('token');
      dispatch({type:"USER", payload:false})
      setIsLogin(false)
      history.push('/');
  };

const RenderMenu = () => {
  if(isLogin){
    return (
      <>
          <Menu.Item  className='list'>
          < Link  to="/add_new_profile">Add Profile</Link>
          </Menu.Item>
          <Menu.Item  className='list'>
            <Button color="inherit" onClick={showDrawer}><span className='pro-btn'>Profile</span></Button>
          </Menu.Item>
          <Menu.Item  className='list'>
            <Button onClick={onLogout} style={{backgroundColor:"rgb(96 71 71)",height:"40px",width:"130px",color:'#fff'}}  variant="contained"  color="secondary">
            logout
            </Button>
          </Menu.Item>
      </>
    )
  }else{
    return(
      <>
        <Menu.Item  className='list'>
          <Link   to="/register">Register</Link>
        </Menu.Item>
        <Menu.Item  className='list'>
          <Link to="/login">Login</Link>
        </Menu.Item> 
      </>
    )
  }
}

    return (
      <>
      <Menu mode="horizontal">
         <Menu.Item  className='list'>
         <Link className="navbar-brand" to="#"><img style={{width:'125px'}} src="https://www.logopik.com/wp-content/uploads/edd/2018/09/A-Fast-Dating-Vactor-Logo.png" alt="" /></Link>
        </Menu.Item>
        <Menu.Item  className='list'>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item  className='list'>
          <Link to="/about">About Us</Link>
        </Menu.Item>
        <Menu.Item  className='list'>
          <Link to="/contact">Contact Us</Link>
        </Menu.Item>
        <RenderMenu/>
      </Menu>
      <Drawer title="Profile" placement="right" onClose={onClose} visible={visible}>
        {localStorage.getItem('data') && (
          <h1>{localStorage.getItem('data')}</h1>
        )}
        <strong style={{fontSize:'20px'}}>Contact: <span>+918516832569</span></strong><br /><br />
        <strong style={{fontSize:'20px'}}>Address: <span> Vijay Nagar Indore (473255)</span></strong><br /><br />
         <span> <strong style={{fontSize:'20px'}}>About:</strong> Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it 
          to make a type specimen book. It has survived not only five centuries,
        </span>
      </Drawer>
      </>
    );
  }

export default RightMenu;