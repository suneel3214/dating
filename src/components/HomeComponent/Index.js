import React from 'react'
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Container
} from "@mui/material";
import { styled } from '@mui/material/styles';
import './index.css';
import Feature from '../HomeComponent/features';
import NewFeatures from '../HomeComponent/NewFeatures';
import image from './../images/about.jpg'
import slide from './../images/slide-img.jpg'
import slide2 from './../images/2.jpg'
import slide3 from './../images/ff.jpg'
import slide4 from './../images/1.jpg'


import { Carousel } from 'antd';

export default function index() {
 
  const myStyle={
    backgroundImage: 
   "url('https://i.pinimg.com/originals/1a/95/95/1a959521c04966d1607a83797b409325.gif')",
    height:'107vh',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop: '16px',
};

  return (
    <div>
      <Box style={myStyle} className='back-img'sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={6} md={8}>
              <Typography className="text-content" variant="h3" gutterBottom component="div">
              We put you in touch with nearby girls and guys!
              </Typography>
              <img className='top-img' src={image} alt="" />
            </Grid>
            <Grid xs={6} md={4}>
              <Typography className="text" variant="h4" gutterBottom component="div">
              Meet someone new today.
              </Typography>
              <div className='btns'>
                <Button className='btn-style' variant="contained"  color="secondary">
                Start Serach
                </Button>
              </div>
              <img className='radius-img' src="https://cdn.filmytoday.com/uploads/370x450_61dc5b764ada1.jpg" alt="" />
            </Grid>
          </Grid>
      </Box>
      <Container fixed>
            <Typography className="feature-heading" variant="h3" gutterBottom component="div">
              ***** Sweet Couples *****
            </Typography>
            <Box sx={{ flexGrow: 1 }} style={{marginTop:'100px'}}>
            <Grid container spacing={2}>
                    <Grid xs={2} md={2}>
                      <div class="item">
                        <img className='slide-img' src={slide}/>
                          <i class="fa fa-heart"></i>
                      </div>
                    </Grid>
                    <Grid xs={2} md={2}>
                      <div class="item">
                        <img className='slide-img' src={slide2}/>
                          <i class="fa fa-heart"></i>
                      </div>
                    </Grid>
                    <Grid xs={2} md={2}>
                      <div class="item">
                        <img className='slide-img' src="https://www.itl.cat/pngfile/big/285-2859230_bollywood-actress-jacqueline-fernandez-hd-wallpaper-kick-film.jpg"/>
                          <i class="fa fa-heart"></i>
                      </div>
                    </Grid>
                    <Grid xs={2} md={2}>
                      <div class="item">
                        <img className='slide-img' src="https://i0.wp.com/filmitamasha.com/wp-content/uploads/2020/04/Sonakshi-Sinha-2.jpg"/>
                          <i class="fa fa-heart"></i>
                      </div>
                    </Grid>
                    <Grid xs={2} md={2}>
                      <div class="item">
                        <img className='slide-img' src={slide3}/>
                          <i class="fa fa-heart"></i>
                      </div>
                    </Grid>
                    <Grid xs={2} md={2}>
                      <div class="item">
                        <img className='slide-img' src={slide4}/>
                          <i class="fa fa-heart"></i>
                      </div>
                    </Grid>
                     {/* <Carousel autoplay>
                        <div>
                          <img className='slide-img' src={slide} alt="" />
                        </div>
                        <div>
                          <img className='slide-img' src={slide2} alt="" />
                        </div>
                        <div>
                          <img className='slide-img' src="https://www.itl.cat/pngfile/big/285-2859230_bollywood-actress-jacqueline-fernandez-hd-wallpaper-kick-film.jpg" alt="" />
                        </div>
                        <div>
                          <img className='slide-img' src="https://i0.wp.com/filmitamasha.com/wp-content/uploads/2020/04/Sonakshi-Sinha-2.jpg" alt="" />
                        </div>
                      </Carousel> */}
                </Grid>
            </Box>
        </Container> 
       <Feature />
        <NewFeatures />
    </div>
  )
}
