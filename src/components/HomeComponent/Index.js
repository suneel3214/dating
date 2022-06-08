import React from 'react'
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import './index.css';
import Feature from '../HomeComponent/features';
import NewFeatures from '../HomeComponent/NewFeatures';
import image from './../images/about.jpg'


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
       <Feature />
        <NewFeatures />
    </div>
  )
}
