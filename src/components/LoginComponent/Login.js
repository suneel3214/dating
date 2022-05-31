import React,{useState,useEffect} from 'react'
import Cookies  from "js-cookie";

import {
    Box,
    Grid,
    Typography,
    Button,
    Container,
  } from "@mui/material";
  import './login.css';
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import 'antd/dist/antd.css';
import {Form, Input,Row,Col,Select, Spin  } from 'antd';
import PropTypes from 'prop-types';
import useAuth from "../../hooks/useAuth";
import { useHistory } from 'react-router-dom';
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};
const Login = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const { getUserLogin } = useAuth();
  
  const onLogin = (data) => {
      getUserLogin(data);
      form.resetFields();
      localStorage.setItem('data', data.email);
  };

  return (
    <div>
      <Container fixed>
        <Box sx={{ flexGrow: 1 }} style={{marginTop:'80px'}}>
           <Grid container spacing={2}>
            <Grid xs={6} md={5}>
              <img src="https://images.unsplash.com/photo-1550060237-db30899a0745?crop=entropy&cs=tinysrgb&fm=jpg" style={{width:'100%',height:'550px'}} alt="" />
            </Grid>
            <Grid xs={6} md={1}>
            </Grid>
            <Grid xs={6} md={6}>
                <Typography className='logo' variant="h3" gutterBottom component="div">
                 {/* <span style={{color:'#000',fontWeight:'900'}}>Dating</span> Logo */}
                 <img style={{width:'125px'}} src="https://www.logopik.com/wp-content/uploads/edd/2018/09/A-Fast-Dating-Vactor-Logo.png" alt="" />
                </Typography>
                <Typography  variant="h4" gutterBottom component="div">
                Sign In _________________
                </Typography>
                <h4>Don't have an account? &nbsp;
                <Link className="" to="/register">
                  Sign Up
                </Link>
                </h4>
                <Box>
                <Form
                  form={form}
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  onFinish={onLogin}
                  autoComplete="off"
                  layout="vertical" 
                >
                  <Form.Item
                    label="Email"
                    name="email"
                    className='lebal'
                    rules={[{ required: true, message: 'Please Enter Your Email Address!' }]}
                  >
                    <Input placeholder="Email Address" name="email"/>
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    className='lebal'
                    rules={[{ required: true, message: 'Please Enter your password!' }]}
                  >
                    <Input.Password name="password" placeholder="Password"/>
                  </Form.Item><br />
                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" variant="contained"  color="secondary" htmlType="submit">
                    Sign In
                    </Button>&nbsp;&nbsp;&nbsp;
                    <Link className="" to="/">
                           Forgate Password ?
                    </Link>
                  </Form.Item>
                </Form>
                </Box><br /><br />
                <Box 
                    sx={{
                    '& > :not(style)': { m: 1, width: '42.5ch' ,height:'40px' },
                    }}
                    >
                   <Button variant="contained" style={{backgroundColor:'#ba2e9a'}}><InstagramIcon/>&nbsp; Instagram</Button>
                   <Button variant="contained" style={{backgroundColor:'#4c65a8'}}><FacebookIcon/>&nbsp; Facebook</Button><br />
                   <Button variant="contained" style={{backgroundColor:'#41a1f6'}}><TwitterIcon/>&nbsp; Twitter</Button>
                   <Button variant="contained" style={{backgroundColor:'#c81121'}}><YouTubeIcon/>&nbsp; YouTube</Button>
                </Box>
            </Grid>  
           </Grid>
        </Box>
      </Container>
    </div>
  )
}
export default Login;