import React from "react";
import {
  Box,
  Grid,
} from "@mui/material";
import './style.css';
function Navbar() {
  return (
<div>
    <Box className='box' sx={{ flexGrow: 1 }}>
        <Grid container style={{height:'50px'}} spacing={2}>
            <Grid  className='link' xs={6} md={12}>
            <marquee>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </marquee>
            </Grid>
        </Grid>
    </Box><hr />
</div>
  );
}
export default Navbar;