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

export default function index() {
 
  const myStyle={
    backgroundImage: 
   "url('https://images.unsplash.com/photo-1621621667797-e06afc217fb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
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
            </Grid>
            <Grid xs={6} md={4}>
              <Typography className="text" variant="h4" gutterBottom component="div">
              Meet someone new today.
              </Typography>
              <div className='btns'>
                <Button className='btn-style' variant="contained"  color="secondary">
                Add Profile
                </Button>&nbsp;
                <Button className='btn-style' variant="contained"  color="secondary">
                Start Serach
                </Button>
              </div>
            </Grid>
          </Grid>
          
      </Box>
       <Feature />
        <NewFeatures />
    </div>
  )
}
