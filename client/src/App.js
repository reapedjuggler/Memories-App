import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Forms/Form'
import { useDispatch } from 'react-redux';


import Image from './assets/background/memories.png'
import useStyles from './Styles';
import { getPosts } from './redux/memories/memoriesAction'; 

import './index.css';

const App = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        dispatch(getPosts());
        console.log("Iam rendered");        
    }, [currentId, dispatch]);

    return (
        <div>
            {/* Container for the App bar */}
            <Container maxWidth = "lg">
                 
                <AppBar className = {classes.appBar}  position="static" color = "inherit">
                    <Typography className = {classes.heading} variant = "h3" align = "center"> Memories </Typography> 
                    <img src = {Image} alt = "memories" height = "60"></img>
                </AppBar>

                <Grow in>        
                    <Container> 
                        <Grid container justify = "space-between" alignItems = "stretch" spacing = {3}>
                            <Grid item xs = {12} sm = {7}> 
                                <Posts setCurrentId = {setCurrentId} />
                            </Grid>

                            <Grid item xs = {12} sm = {4}> 
                                <Form currentId = {currentId} setCurrentId = {setCurrentId}/>
                            </Grid> 
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default App;