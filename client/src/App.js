import React from 'react'
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Image from './assets/background/memories.png'

const App = () => {
    return (
        <div>
            {/* Container for the App bar */}
            <Container>
                <AppBar position="static" color = "inherit">
                    <Typography variant = "h2"> Memories </Typography> 
                    <img src = {Image}></img>
                </AppBar>
            </Container>
            <Grow in>        
                <Container> 
                    <Grid item xs = {12} sm = {7}> 

                    </Grid>
                </Container>
            </Grow>
        </div>
    )
}

export default App;