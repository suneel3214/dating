import React,{useState } from 'react'
import {
    Box,
    Grid,
    Typography,
    Button,
    Container,
  } from "@mui/material";
import 'antd/dist/antd.css';
import {Form, Input,Row,Col,Select  } from 'antd';
 
  import './register.css';
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import useAuth from "../../hooks/useAuth";
import { useHistory } from 'react-router-dom';
const { Option } = Select;
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};
 const Register = () => {
    const [form] = Form.useForm();
    const history = useHistory();

    const { getUserListing } = useAuth();

    const onFinish = (data) => {
      getUserListing(data);
      form.resetFields();
      history.push('/login');
    };
  return (
    <div>
      <Container fixed>
        <Box sx={{ flexGrow: 1 }} style={{marginTop:'80px'}}>
           <Grid container  className="container-flex">
            <Grid xs={6} md={6} >
              <img src="https://images.unsplash.com/photo-1627631242947-c7601b80d6a0?crop=entropy&cs=tinysrgb&fm=jpg" style={{width:'95%',height:'845px'}} alt="" />
            </Grid>
            {/* <Grid xs={6} md={1}>
            </Grid> */}
            <Grid xs={6} md={6} >
                <Typography className='logo' variant="h3" gutterBottom component="div">
                 {/* <span style={{color:'#000',fontWeight:'900'}}>Dating</span> Logo */}
                 <img style={{width:'125px'}} src="https://www.logopik.com/wp-content/uploads/edd/2018/09/A-Fast-Dating-Vactor-Logo.png" alt="" />
                </Typography>
                <Typography  variant="h4" gutterBottom component="div">
                Sign Up
                </Typography>
                <h4>Already a member? &nbsp;
                <Link className="" to="/login">
                  Sign In
                </Link>
                </h4>
                <Box>
                <Form
                  form={form}
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  autoComplete="off"
                  layout="vertical" 
                >
                  <Form.Item
                    label="Username"
                    name="name"
                    className='lebal'
                    rules={[{ required: true, message: 'Please Enter your username!' }]}
                  >
                    <Input placeholder="User Name" name="name"/>
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    className='lebal'
                    rules={[{ required: true, message: 'Please Enter your Email!' }]}
                  >
                    <Input  placeholder="Email" name="email"/>
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    className='lebal'
                    rules={[{ required: true, message: 'Please Enter your password!' }]}
                  >
                    <Input.Password name="password" placeholder="Password"/>
                  </Form.Item>
                  <Form.Item name="intrested" className='lebal' label="I'Am Intrested In">
                      <Select name="intrested" placeholder="select option">
                          <Option value="male">Male</Option>
                          <Option value="female">Female</Option>
                          <Option value="other">Other</Option>
                        </Select>
                      </Form.Item>
                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" variant="contained"  color="secondary" htmlType="submit">
                      Register
                    </Button>
                  </Form.Item>
                </Form>
                </Box><br /><br />
                <Box 
                    sx={{
                    '& > :not(style)': { m: 1, width: '42.5ch' ,height:'40px' },
                    }}
                    >
                   <Button variant="contained" className='social-icon-btn' style={{backgroundColor:'#ba2e9a'}}><InstagramIcon/>&nbsp; </Button>
                   <Button variant="contained" className='social-icon-btn' style={{backgroundColor:'#4c65a8'}}><FacebookIcon/>&nbsp; </Button><br />
                   <Button variant="contained" className='social-icon-btn' style={{backgroundColor:'#41a1f6'}}><TwitterIcon/>&nbsp; </Button>
                   <Button variant="contained" className='social-icon-btn' style={{backgroundColor:'#c81121'}}><YouTubeIcon/>&nbsp; </Button>
                </Box>
            </Grid>  
           </Grid>
        </Box>
      </Container>
    </div>
  )
}
export default Register;