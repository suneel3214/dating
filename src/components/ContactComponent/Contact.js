import React from 'react'
import {
    Box,
    Grid,
    Typography,
    Button,
    Container,
    TextField,
    TextareaAutosize 
  } from "@mui/material";
  import './contact.css';
  import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import EmailIcon from '@mui/icons-material/Email';
export default function Contact() {
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
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '40ch',marginTop:'35px' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField id="outlined-basic" className='text-filed' label="Full Name" placeholder='Full Name' variant="outlined" />
                        <TextField id="outlined-basic" className='text-filed' label="Email" placeholder='Email' variant="outlined" />
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={8}
                            placeholder="Your message......"
                            style={{ width: '93%' }}
                        />
                        <Button className='btn-style-contact' variant="contained"  color="secondary">
                            Send
                        </Button>
                    </Box>
                    </Grid>
                </Grid>
            </Box>
       </Container>
    </div>
  )
}
