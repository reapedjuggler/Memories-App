import React , { useState, useEffect } from 'react'
import useStyles from './formsStyle';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64'
import { Grid } from '@material-ui/core';

import { createPost, updatePost } from '../../redux/memories/memoriesAction';

const Form = ({currentId, setCurrentId}) => {

    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const classes = useStyles();
    const dispatch = useDispatch();
    const post = useSelector((state) => currentId ? state.memoryReducer.find((post) => post._id === currentId) : null);
    const user = JSON.parse(localStorage.getItem('authDetails'));

    // For updating a post
    useEffect(() => {

        if (post) {
          setPostData(post);
        } 

    },  [post])


    const clear = () => {
      setCurrentId(0);
      setPostData({title: '', message: '', tags: '', selectedFile: '' });
    }

    const handleSubmit = async (e) => {
      
          e.preventDefault();

          if (currentId === 0) {
            dispatch(createPost({...postData, name: user?.resp?.name}));
          }

          else {
            dispatch(updatePost(currentId, postData));
          }
          
          clear();
    };

    if (!user?.resp?.name) {

      console.log(user, " I seriously need Sleeeeeeeeeeeep!!!\n");

      return (
        <Grid>
          <Typography variant = "h4">
            You need to be logged in first to create an Account
          </Typography>
        </Grid>
      )

    }

    return (
        <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            
            <Typography variant = "h6">
            
              {   
                  currentId ? `Editing ` : `Creating `
              }

              a memory
              
            </Typography>
            
            {/* <TextField 
            name = "creater" 
            variant = "outlined" 
            label = "creater" 
            value = {postData.creator}
            onChange = {(e) => setPostData({...postData, creator: e.target.value})}
            fullWidth/>
             */}
            <TextField 
            name = "title" 
            variant = "outlined" 
            label = "title" 
            value = {postData.title}
            onChange = {(e) => setPostData({...postData, title: e.target.value})}
            fullWidth/>
            
            <TextField 
            name = "message" 
            variant = "outlined" 
            label = "message" 
            className = {classes.message}
            value = {postData.message}
            onChange = {(e) => setPostData({...postData, message: e.target.value})}
            fullWidth/>
            
            <TextField 
            name = "tags" 
            variant = "outlined"  
            label = "tags" 
            value = {postData.tags}
            onChange = {(e) => setPostData({...postData, tags: e.target.value.split(',')})}
            fullWidth/>

            
            <div className={classes.fileInput}>
              <FileBase
                type = "file"
                multiple = {false}
                onDone = {({base64}) => setPostData({...postData, selectedFile: base64})}
              />
            </div>
            
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
          
          </form>
        </Paper>
    )
}

export default Form;
