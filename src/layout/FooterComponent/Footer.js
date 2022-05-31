import React from 'react'
import {
    Box,
    Grid,
    Paper,
    Typography,
    Button,
    CardContent,
    CardActions,
    Card,
    CardMedia,
    CardActionArea,
    Container,
    Link,
    TextField 
  } from "@mui/material";
  import InstagramIcon from '@mui/icons-material/Instagram';
  import FacebookIcon from '@mui/icons-material/Facebook';
  import TwitterIcon from '@mui/icons-material/Twitter';
  import YouTubeIcon from '@mui/icons-material/YouTube';
  import './footer.css';
export default function Footer() {
  return (
    <div style={{marginTop:'80px',backgroundColor:"#000"}}>
    <hr style={{height:'3px', backgroundColor:'#d71fe3'}}/>
      <Container fixed>  
         <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={2}>
                <Grid xs={6} md={4}>
                    <Typography className='dating-footer' variant="h3" gutterBottom component="div">
                       <span className='enjoy-text' style={{color:'#fff'}}> Enjoy Your</span> <strong className='enjoy-text' style={{color:'#ffc300'}}>Dating !</strong>
                    </Typography>
                    <Typography className='dating-footer' variant="h6" gutterBottom component="div">
                       <span style={{color:'#fff'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent tempus eleifend risus ut congue.</span>
                    </Typography>
                </Grid>
                <Grid xs={6} md={2}>
                <Typography className='dating-footer' variant="h6" gutterBottom component="div">
                       <span style={{color:'#fff'}}>UseFull Links</span><br /><br />
                       <Link href="/">Home</Link><br />
                       <Link href="/about">About Us</Link><br />
                       <Link href="/contact">Contact</Link><br />
                       <Link href="/blog">Blog</Link><br />
                    </Typography>
                </Grid>
                <Grid xs={6} md={2}>
                <Typography className='dating-footer' variant="h6" gutterBottom component="div">
                       <span style={{color:'#fff'}}>Quick Search</span><br /><br />
                       <Link href="#">Search</Link><br />
                       <Link href="#">Popular</Link><br />
                       <Link href="#">Newly Added</Link><br />
                       <Link href="#">Most Relevant</Link><br />
                    </Typography>
                </Grid>
                <Grid xs={6} md={4}>
                <Typography className='dating-footer' variant="h6" gutterBottom component="div">
                    <strong style={{color:'#fff'}}>Join our newsletter</strong><br />
                    <span style={{color:'#fff'}}>We write rarely, but only the best content.</span><br /><br />
                    <TextField id="outlined-basic" className='search' placeholder='Email Address Here...' variant="outlined" /><br /> <br />
                    <span style={{color:'#fff'}}>We'll never share your details. See our </span>  <Link href="#">Privacy Policy</Link>
                </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid xs={6} md={6}>
                <Typography className='dating-footer' variant="h6" gutterBottom component="div">
                    <strong style={{color:'#fff'}}>© 2022 All rights reserved & <Link to="" style={{fontSize:'15px'}}>Developed By Code For Solution.</Link></strong><br />
                </Typography>
                </Grid>
                <Grid xs={6} md={6}>
                <div className='footer-end'>
                  <Link className="nav-menu insta-icon" to="#">
                    <InstagramIcon/>
                  </Link>
                  <Link className="nav-menu face-icon" to="#">
                    <FacebookIcon/>
                  </Link>
                  <Link className="nav-menu twi-icon" to="#">
                    <TwitterIcon/>
                  </Link>
                  <Link className="nav-menu yout-icon" to="#">
                    <YouTubeIcon/> 
                  </Link>
                </div>
                </Grid>
            </Grid>
         </Box>
      </Container>
    </div>
  )
}
