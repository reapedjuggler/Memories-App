import React , { useState, useEffect } from 'react'
import useStyles from './formsStyle';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64'

const Form = () => {

    const classes = useStyles();

    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const handleSubmit = () => {

    };

    const clear = () => {
      
    }

    return (
        <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant = "h6"> Create a Memory </Typography>
            <TextField 
            name = "creater" 
            variant = "outlined" 
            label = "creater" 
            value = {postData.creater}
            onchange = {(e) => setPostData({...postData, creater: e.target.value})}
            fullwidth/>
            
            <TextField 
            name = "title" 
            variant = "outlined" 
            label = "title" 
            value = {postData.title}
            onchange = {(e) => setPostData({...postData, title: e.target.value})}
            fullwidth/>
            
            <TextField 
            name = "message" 
            variant = "outlined" 
            label = "message" 
            value = {postData.message}
            onchange = {(e) => setPostData({...postData, message: e.target.value})}
            fullwidth/>
            
            <TextField 
            name = "tags" 
            variant = "outlined" 
            label = "tags" 
            value = {postData.tags}
            onchange = {(e) => setPostData({...postData, tags: e.target.value})}
            fullwidth/>

            
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
