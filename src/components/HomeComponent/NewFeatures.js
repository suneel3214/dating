import React ,{useState,useEffect} from 'react';
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
  import useAuth from '../../hooks/useAuth';
export default function NewFeatures() {

    const [profileList , setProfileList] = React.useState([]);
    const {getUserProfileList} = useAuth();
    
    useEffect ( () => {
        allList()
    },[])

    const allList = async () => {
      var list = await getUserProfileList().then(res=>{
        setProfileList(res);
      }).catch((error)=>{
          return error;
      })
    }
    
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
               <button class="custom-btn btn-12"><span>Click!</span><span>To Day Register</span></button>
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
                    {profileList.map(index=>
                    <Grid xs={6} md={3}>
                        <Card className='card-w'>
                            <div class = "frame col-xs-6">
                                <img src={`http://localhost:8000/image/${index.image}`} />
                                <div class = "details">
                                    <h1>Details</h1>
                                    <h5>Name:- &nbsp; &nbsp; {index.name}</h5>
                                    <h5>Age:- &nbsp; &nbsp; {index.age}</h5>
                                    <h5>Country:- &nbsp; &nbsp; {index.country}</h5>
                                    <h5>Gender:- &nbsp; &nbsp; {index.gender}</h5>
                                    <h5>Eyes Color:- &nbsp; &nbsp; {index.eye}</h5>
                                    <h5>Contact:- &nbsp; &nbsp; {index.contact}</h5>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                    )}
                </Grid>
            </Box>
        </Container>    
    </div>
  );
}


