import * as React from 'react';
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
  } from "@mui/material";
  import './index.css';

export default function features() {
  return (
    <div>
        <Container fixed>
            <Typography className="feature-heading" variant="h3" gutterBottom component="div">
            Featured Profiles
            </Typography>
            <Box sx={{ flexGrow: 1 }} style={{marginTop:'40px'}}>
                <Grid container spacing={2}>
                    <Grid xs={6} md={3}>
                    <Card className='card-w'>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="430"
                            image="https://images.unsplash.com/photo-1627631242947-c7601b80d6a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRhdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt="green iguana"
                            />
                            <CardContent className='overlays'>
                                <h2 className='text-overlay'>Name:- &nbsp; &nbsp; Shruti</h2>
                                <h2 className='text-overlay'>Age:- &nbsp; &nbsp; 21</h2>
                                <h2 className='text-overlay'>City:- &nbsp; &nbsp; America</h2>
                                <h2 className='text-overlay'>Gender:- &nbsp; &nbsp; Female</h2>
                                <h2 className='text-overlay'>Eyes Color:- &nbsp; &nbsp; Blue</h2>
                                <h2 className='text-overlay'>Contact:- &nbsp; &nbsp; 9630125487</h2>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                    <Grid xs={6} md={3} >
                    <Card className='card-w'>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="430"
                            image="https://images.unsplash.com/photo-1588287792348-8fc81e82828d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="green iguana"
                            />
                            <CardContent className='overlays'>
                                <h2 className='text-overlay'>Name:- &nbsp; &nbsp; Shruti</h2>
                                <h2 className='text-overlay'>Age:- &nbsp; &nbsp; 21</h2>
                                <h2 className='text-overlay'>City:- &nbsp; &nbsp; America</h2>
                                <h2 className='text-overlay'>Gender:- &nbsp; &nbsp; Female</h2>
                                <h2 className='text-overlay'>Eyes Color:- &nbsp; &nbsp; Blue</h2>
                                <h2 className='text-overlay'>Contact:- &nbsp; &nbsp; 9630125487</h2>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                    <Grid xs={6} md={3} >
                    <Card className='card-w'>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="430"
                            image="https://images.unsplash.com/photo-1550060237-db30899a0745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80"
                            alt="green iguana"
                            />
                            <CardContent className='overlays'>
                                <h2 className='text-overlay'>Name:- &nbsp; &nbsp; Shruti</h2>
                                <h2 className='text-overlay'>Age:- &nbsp; &nbsp; 21</h2>
                                <h2 className='text-overlay'>City:- &nbsp; &nbsp; America</h2>
                                <h2 className='text-overlay'>Gender:- &nbsp; &nbsp; Female</h2>
                                <h2 className='text-overlay'>Eyes Color:- &nbsp; &nbsp; Blue</h2>
                                <h2 className='text-overlay'>Contact:- &nbsp; &nbsp; 9630125487</h2>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                    <Grid xs={6} md={3} >
                    <Card className='card-w'>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="430"
                            image="https://images.unsplash.com/photo-1619635770482-6eca7baeff21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
                            alt="green iguana"
                            />
                            <CardContent className='overlays'>
                                <h2 className='text-overlay'>Name:- &nbsp; &nbsp; Shruti</h2>
                                <h2 className='text-overlay'>Age:- &nbsp; &nbsp; 21</h2>
                                <h2 className='text-overlay'>City:- &nbsp; &nbsp; America</h2>
                                <h2 className='text-overlay'>Gender:- &nbsp; &nbsp; Female</h2>
                                <h2 className='text-overlay'>Eyes Color:- &nbsp; &nbsp; Blue</h2>
                                <h2 className='text-overlay'>Contact:- &nbsp; &nbsp; 9630125487</h2>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} style={{marginTop:'100px'}}>
            <Grid container spacing={2}>
                    <Grid xs={6} md={6}>
                    <img style={{width:'100%',height:'500px'}} src='https://images.unsplash.com/photo-1619635770621-3f90a70b83ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
                    </Grid>
                    <Grid xs={6} md={6} >
                    <Typography className="feature-heading" variant="h3" gutterBottom component="div">
                    We put you in touch with nearby girls and guys!
                    </Typography>
                    <Typography className="feature-heading" variant="h6" gutterBottom component="div">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue. Pellentesque nec 
                    lacus elit. Pellentesque convallis nisi ac augue pharetra eu tristique neque consequat.
                    </Typography>
                    <div className='btns'>
                        <Button className='btn-style b-style' variant="contained"  color="secondary">
                        Add Profile
                        </Button>&nbsp;
                        <Button className='btn-style b-style' variant="contained"  color="secondary">
                        Start Serach
                        </Button>
                    </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>    
    </div>
  );
}

