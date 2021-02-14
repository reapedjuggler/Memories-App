import React , { useState, useEffect } from 'react'
import useStyles from './formsStyle';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64'

import { createPost, updatePost } from '../../redux/memories/memoriesAction';

const Form = ({currentId, setCurrentId}) => {


    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();
    const post = useSelector((state) => currentId ? state.memoryReducer.find((post) => post._id === currentId) : null);

    console.log(post, " iam post in form\n\n", currentId);

    // For updating a post
    useEffect(() => {

        if (post) {
          setPostData(post);
        } 

    },  [post])


    const handleSubmit = (e) => {
        e.preventDefault();

          if (!currentId)
            dispatch(createPost(postData));
        
          else {
            dispatch(updatePost(currentId, postData));
          }
    };

    const clear = () => {
      setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }

    return (
        <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant = "h6"> Create a Memory </Typography>
            
            <TextField 
            name = "creater" 
            variant = "outlined" 
            label = "creater" 
            value = {postData.creator}
            onChange = {(e) => setPostData({...postData, creator: e.target.value})}
            fullWidth/>
            
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
            value = {postData.message}
            onChange = {(e) => setPostData({...postData, message: e.target.value})}
            fullWidth/>
            
            <TextField 
            name = "tags" 
            variant = "outlined" 
            label = "tags" 
            value = {postData.tags}
            onChange = {(e) => setPostData({...postData, tags: e.target.value})}
            fullWidth/>

            
            <div className={classes.fileInput}>
              <FileBase
                type = "file"
                multiple = {false}
                onDone = {(base64) => setPostData({...postData, selectedFile: base64})}
              />
            </div>
            
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
          
          </form>
        </Paper>
    )
}

export default Form;
