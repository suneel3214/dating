import React from 'react'
import {
    Box,
    Grid,
    Typography,
    Button,
    Container,
  } from "@mui/material";
  import './contact.css';
  import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import EmailIcon from '@mui/icons-material/Email';
  import {Form, Input ,Row ,Col } from 'antd';
    const validateMessages = {
        required: '${label} is required!',
        types: {
        email: '${label} is not a valid email!',
        },
    };  
    const { TextArea } = Input;
export default function Contact() {
  const [form] = Form.useForm();

  return (
    <div>
       <Container fixed>
            <Typography className="contact-heading" variant="h3" gutterBottom component="div">
                Contact
            </Typography><hr />
            <Box sx={{ flexGrow: 1 }} style={{marginTop:'100px'}}>
               <Grid container spacing={2}>
                    <Grid xs={6} md={6}>
                    <img style={{width:'100%',height:'610px'}} src='https://cdn.pixabay.com/photo/2012/02/29/11/58/agent-18741_960_720.jpg' />
                    </Grid>
                    <Grid xs={6} md={6} >
                    <div style={{textAlign:'center'}}>
                        <Typography className="" variant="h6" gutterBottom component="div">
                        <span className='let-head'> LET'S TALK</span>
                        </Typography>
                    </div>
                    <Typography className="feature-heading" variant="h3" gutterBottom component="div">
                    Got any questions? Don't hesitate to get in touch.
                    </Typography>
                    <Typography className="feature-heading" variant="h6" gutterBottom component="div">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue. Pellentesque nec 
                    lacus elit. Pellentesque convallis nisi ac augue pharetra eu tristique neque consequat.
                    </Typography>
                    <div >
                        <Typography className="bold" variant="h4" gutterBottom component="div">
                       <span  className='let-head'><LocationOnIcon/></span>&nbsp; &nbsp; Address <br />&nbsp; &nbsp;&nbsp; &nbsp;<strong style={{fontSize:'19px'}}>Buckingham Palace, London</strong>
                        </Typography>
                        <Typography className="bold" variant="h4" gutterBottom component="div">
                        <span  className='let-head'><LocalPhoneIcon/></span>&nbsp; &nbsp; Phone <br />&nbsp; &nbsp;&nbsp; &nbsp;<strong style={{fontSize:'19px'}}>+91045325614</strong>
                        </Typography>
                        <Typography className="bold" variant="h4" gutterBottom component="div">
                        <span className='let-head'><EmailIcon/></span>&nbsp; &nbsp;  Email <br />&nbsp; &nbsp;&nbsp; &nbsp;<strong style={{fontSize:'19px'}}>codeforsolution@gmail.com</strong>
                        </Typography>
                    </div>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} style={{marginTop:'100px',border:'1px solid #000'}}>
               <Grid container spacing={2}>
                    <Grid xs={6} md={6}>
                        <div style={{textAlign:'start'}}>
                            <Typography className="" variant="h1" gutterBottom component="div">
                            <span style={{marginLeft:'40px'}}> <EmailIcon style={{fontSize:'75px',color:'rgb(241, 212, 24)'}} /></span>
                            </Typography>
                        </div>
                        <Typography className="feature-heading" variant="h3" gutterBottom component="div">
                        If you like what you see, let's work together.
                        </Typography>
                        <Typography className="feature-heading media-query" variant="h6" gutterBottom component="div">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue. Pellentesque nec 
                        lacus elit. Pellentesque convallis nisi ac augue pharetra eu tristique neque consequat.
                        </Typography>
                    </Grid>
                    <Grid xs={6} md={6} >
                    <Box
                        sx={{
                            '& > :not(style)': { m: 1,marginTop:'35px' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                         <Form
                            form={form}
                            name="basic"
                            initialValues={{ remember: true }}
                            autoComplete="off"
                            layout="vertical" 
                            style={{padding:'10px'}}
                            >
                            <Form.Item
                                label="Name"
                                name="name"
                                className='lebal'
                                rules={[{ required: true, message: 'Please Enter Your Name!' }]}
                            >
                                <Input placeholder="Name" style={{width:'27ch'}} name="name"/>
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                className='lebal'
                                rules={[{ required: true, message: 'Please Enter Your Email Address!' }]}
                            >
                                <Input placeholder="Email Address" style={{width:'27ch'}} name="email"/>
                            </Form.Item>
                            <Form.Item label="Message" className='lebal' >
                                <TextArea rows={4} placeholder="Send message" />
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" variant="contained"  color="secondary" htmlType="submit">
                                Sign In
                                </Button>&nbsp;&nbsp;&nbsp;
                            </Form.Item>
                        </Form>
                    </Box>
                    </Grid>
                </Grid>
            </Box>
       </Container>
    </div>
  )
}
