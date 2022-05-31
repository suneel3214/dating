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

export default function NewFeatures() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }} style={{marginTop:'80px',backgroundColor:"#ffc300"}}>
           <Grid container spacing={2} style={{height:"160px"}}>
            <Grid xs={6} md={8}>
                <Typography className="account-text font-s" variant="h3" gutterBottom component="div">
                Create your free account today!
                </Typography>
            </Grid>
            <Grid xs={6} md={4}>
               <div style={{textAlign:'center'}}>
                <Button className='btn-style-sec' variant="contained"  color="secondary">
                    Sign Up Now !
                </Button>
               </div>
            </Grid>  
           </Grid>
        </Box>
        <Container fiexd>
         <Box sx={{ flexGrow: 1 }} style={{marginTop:'80px'}}>
            <Grid container spacing={2}>
               <Grid xs={6} md={6}>
                <Typography className='profile-feature' variant="h3" gutterBottom component="div">
                Featured Profiles
                </Typography>
               </Grid>
               <Grid xs={6} md={6}>

               </Grid>
            </Grid>
         </Box>
        </Container>
        <Container fixed>
            <Box sx={{ flexGrow: 1 }} style={{marginTop:'60px'}}>
                <Grid container spacing={2}>
                    <Grid xs={6} md={3}>
                    <Card className='card-w'>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="430"
                            image="https://igimages.gumlet.io/telugu/gallery/actress/nainaganguly/nainaposter241219.jpg"
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
                            image="https://images.unsplash.com/photo-1607569490015-7101095605ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
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
                            image="https://w0.peakpx.com/wallpaper/873/666/HD-wallpaper-pavani-actress-armpits-navel-south-indian-thumbnail.jpg"
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
                            image="https://w0.peakpx.com/wallpaper/777/257/HD-wallpaper-priyanka-jawalkar-actress-navel-south-indian-telugu.jpg"
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
                <Grid container spacing={2}>
                    <Grid xs={6} md={3}>
                    <Card className='card-w'>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="430"
                            image="https://w0.peakpx.com/wallpaper/630/203/HD-wallpaper-kajal-aggarwal-actress-magadheera-navel-south-indian-telugu.jpg"
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
                            image="https://w0.peakpx.com/wallpaper/685/640/HD-wallpaper-mehreen-pirzada-south-indian-actress-tamil-actress.jpg"
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
                            image="https://szcdn.ragalahari.com/may2022/hd/tamannaah-kodithe-song-ghani/tamannaah-kodithe-song-ghani1t.jpg"
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
                <Grid container spacing={2}>
                    <Grid xs={6} md={3}>
                    <Card className='card-w'>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="430"
                            image="https://static.toiimg.com/photo/msid-71581763/71581763.jpg"
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
                            image="https://szcdn.ragalahari.com/april2022/hd/nabha-natesh-photoshoot-apr2022/nabha-natesh-photoshoot-apr20221t.jpg"
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
                            image="https://newssow.com/wp-content/uploads/2021/12/MV5BOWY5MjU0NGItOTc1My00ZjBjLTg0MWMtZDlmZDY5OWI1YTE0XkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg"
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
                            image="https://menglish.sakshi.com/sites/default/files/styles/storypage_main/public/gallery_images/2020/06/8/bollywood%20heroin%20shraddha%20kapoor%20exclusive%20photo%20gallery_19-1591612945.jpg?itok=oH_gF_wJ"
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
        </Container>    
    </div>
  );
}


