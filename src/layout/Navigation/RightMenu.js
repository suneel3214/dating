import React,{useState,useEffect} from 'react';
import { Menu ,Popover} from 'antd';
import {
  Button
} from "@mui/material";
import './navigation_style.css';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import Cookies  from "js-cookie";
import useAuth from "../../hooks/useAuth";
import { useHistory } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const RightMenu = () => { 

// useEffect(() => {
//     const getToken1 =  Cookies.get('token');
//       console.log('sdfdsf')
// }, []);
  // const [session, setSession] = useState([]);
  const text = <span>Profile</span>;
  const content = (
    <div>
      {localStorage.getItem('data') && (
        <strong>{localStorage.getItem('data')}</strong>
       )}
       <br /><br />
       <Button style={{backgroundColor:"rgb(199 14 14)",height:"40px"}}  variant="contained"  color="secondary">
             < Link style={{color:'#fff'}} to="/add_new_profile">Add Profile</Link>
        </Button><br /><br />
    </div>
  );

  const history = useHistory();
  const { getUserLogout } = useAuth();
  // const { getUserLogin } = useAuth();

  const onLogout = (data) => {
      getUserLogout(data);
      localStorage.removeItem('data');
  };
  const getToken =  Cookies.get('token');

    return (
     
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
      
        {/* <Menu.Item  className='list'>
        <Link   to="/register">Register</Link>
       
        </Menu.Item>
        <Menu.Item  className='list'>
          <Link to="/login">Login</Link>
        </Menu.Item> */}

        {getToken && getToken ?
        <>
          <Menu.Item  className='list'>
            <Popover placement="bottom" title={text} content={content} trigger="click">
            <Link to="#">Profile</Link>
          </Popover>
          </Menu.Item>
          <Menu.Item  className='list'>
            <Button onClick={onLogout} style={{backgroundColor:"rgb(96 71 71)",height:"40px",width:"130px",color:'#fff'}}  variant="contained"  color="secondary">
            logout
            </Button>
          </Menu.Item>
          </>
         : 
        <>
         <Menu.Item  className='list'>
        <Link   to="/register">Register</Link>
       
        </Menu.Item>
        <Menu.Item  className='list'>
          <Link to="/login">Login</Link>
        </Menu.Item> 
        </>
         } 
      </Menu>
    );
  }

export default RightMenu;