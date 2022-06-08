import React from 'react'
import {
    Box,
    Grid,
    Typography,
    Button,
    Container,
  } from "@mui/material";
import './about.css'
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import image from './about.jpg'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function About() {
  return (
    <div className='about'>
      <Container fixed>
            <Typography className="feature-heading" variant="h3" gutterBottom component="div">
            About Us
            </Typography><hr />
            <Box sx={{ flexGrow: 1 }} style={{marginTop:'100px'}}>
            <Grid container spacing={2}>
                    <Grid xs={6} md={6}>
                    <div class = "row">
                        <div class = "tdimension">
                            <a href = "#">
                            </a>
                        </div>
                    </div>
                    <img style={{width:'74%',height:'500px'}} src='https://images.unsplash.com/photo-1595831004082-7d028af1387b?crop=entropy&cs=tinysrgb&fm=jpg' />
                    </Grid>
                    <Grid xs={6} md={6} >
                    <Typography className="feature-heading" variant="h3" gutterBottom component="div">
                    We love building WordPress themes that save you money.
                    </Typography>
                    <Typography className="feature-heading" variant="h5" gutterBottom component="div">
                    Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography className="about-text" variant="h6" gutterBottom component="div">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue. Pellentesque nec 
                    lacus elit.
                    </Typography>
                    <Row>
                        <Col>
                           <Typography className="rating" variant="h3" gutterBottom component="div">
                              50,0000 <br /><span className='rating-head'>Customers Worldwide</span>
                            </Typography>
                        </Col>
                        <Col >
                        <Typography className="rating" variant="h3" gutterBottom component="div">
                             24,3200 <br /><span className='rating-head'>Satisfied Customers</span>
                            </Typography>
                        </Col>
                        <Col >
                        <Typography className="rating" variant="h3" gutterBottom component="div">
                              15 <br /><span className='rating-head'>Years Experience</span>
                            </Typography>
                        </Col>
                    </Row>
                    </Grid>
                </Grid>
            </Box> <hr />
            <Box sx={{ flexGrow: 1 }} style={{marginTop:'100px'}}>
            <Grid container spacing={2}>
                <Grid xs={6} md={6} >
                    <Typography className="feature-heading" variant="h3" gutterBottom component="div">
                    Build powerful websites quickly with PremiumPress themes.
                    </Typography>
                    <Typography className="feature-heading" variant="h6" gutterBottom component="div">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue.
                     Pellentesque nec lacus elit. Pellentesque convallis nisi ac augue pharetra eu tristique.
                    </Typography>
                    <Row>
                        <Col>
                           <Typography className="rating" variant="h3" gutterBottom component="div">
                              <CheckCircleIcon className='click-icon'/> <span className='icon-head'>Quick and easy to setup.</span><br />
                              <strong className='strong-text'>Lorem ipsum dolorsit amet consectetur.</strong>
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                           <Typography className="rating" variant="h3" gutterBottom component="div">
                             <CheckCircleIcon className='click-icon'/> <span className='icon-head'>Easy to customize Support.</span><br />
                             <strong className='strong-text'>Lorem ipsum dolorsit amet consectetur.</strong>
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                           <Typography className="rating" variant="h3" gutterBottom component="div">
                              <CheckCircleIcon className='click-icon'/> <span className='icon-head'>Easy to manage and scale.</span><br />
                              <strong className='strong-text'>Lorem ipsum dolorsit amet consectetur.</strong>
                            </Typography>
                        </Col>
                    </Row>
                    </Grid>
                    <Grid xs={6} md={6}>
                        <img style={{width:'100%',height:'700px',padding: '10px'}} src={image} />
                        <div style={{textAlign:'center',marginTop:'50px'}}>
                            <Button className='btn-style' variant="contained"  color="secondary">
                                Add Profile 
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Box> <hr />
            <Box sx={{ flexGrow: 1 }} style={{marginTop:'100px'}}> 
            <Grid container spacing={2}>
                    <Grid xs={6} md={6}>
                    <img style={{width:'74%',height:'500px'}} src='https://1.bp.blogspot.com/-kRZKRSR3Kro/YBWsIcfol_I/AAAAAAAAlec/3APH4LIVDKA0FcmhuhWlBrOpJH8y33GGwCLcBGAsYHQ/w512-h640/Rashmika%2Bmandanna%2Bhot%2Bphotos%2B%25288%2529.jpg' />
                    </Grid>
                    <Grid xs={6} md={6} >
                    <Typography className="feature-heading" variant="h3" gutterBottom component="div">
                    Quick to install and setup - get started today!
                    </Typography>
                    <Typography className="about-text" variant="h6" gutterBottom component="div">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue. Pellentesque nec 
                    lacus elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue. Pellentesque nec lacus elit. Pellentesque nec lacus elit.
                    </Typography>
                    <Row>
                        <Col>
                        <div style={{textAlign:'center',marginTop:'50px',marginRight:'30px'}}>
                            <Button className='btn-style' variant="contained"  color="secondary">
                               Get Started Now !
                            </Button>
                        </div>
                        </Col>
                    </Row>
                    </Grid>
                </Grid>
            </Box>
        </Container>  
    </div>
  )
}
