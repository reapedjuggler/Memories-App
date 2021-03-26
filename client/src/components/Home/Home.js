import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from '../../components/Posts/Posts';
import Form from '../../components/Forms/Form';
import useStyles from './Styles';
import { getPosts } from '../../redux/memories/memoriesAction';


const Home = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {

        dispatch(getPosts());
        // console.log("Iam rendered");        
    
    }, [currentId, dispatch]);


    return (
       <>
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
    </>
    )
}

export default Home;