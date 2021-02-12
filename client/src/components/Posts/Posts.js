import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import useStyles from './PostStyles';
import {Grid, CircularProgress} from '@material-ui/core'

const Posts = () => {

    const posts = useSelector((state) => state.memoryReducer)
    const classes = useStyles();
    console.log(posts, " iam posts");

    return (
        <>  
            {/* Basically upper symbol is an alternative way to write React.fragment */}
            
            {
                !posts.length ? <CircularProgress />:
                <Grid className={classes.container} container alignItems = "stretch" spacing = {3}> 
                    {
                        posts.map((post) => (
                            <Grid key = {post._id} item xs = {12} sm = {6}> 
                                <Post post = {post} />
                            </Grid>
                        ))
                    }
                </Grid>
            }

        </>
    )
};

export default Posts;
