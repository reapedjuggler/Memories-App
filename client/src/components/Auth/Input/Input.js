import React from 'react';
import {Typography, Grid, InputAdornment, TextField, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import makeStyles from './Styles';

const Input = ({name, handleChange, type, handleShow, label}) => {
   
    const classes = makeStyles();

    return (
      
        <div>

            <Grid className={classes.paperContainer}>

                <TextField 
                    className={classes.root}
                    required
                    id = "standard-basic"
                    variant = "outlined"
                    fullWidth
                    autoFocus
                    name = {name}
                    onChange = {handleChange}
                    type = "password"
                    label = {label}
                   
                    InputElement = {
                        
                        name === 'password' ? (

                            {
                                endAdornment: (
                                   
                                   <InputAdornment position="end">
                                    
                                        <IconButton onClick={handleShow}>
                                            {
                                                type === "password" ? (
                                                    <Visibility></Visibility>
                                                ) : (
                                                    <VisibilityOff></VisibilityOff>
                                                )
                                            }
                                        </IconButton>

                                    </InputAdornment>
                                )
                            }

                        ) : null
                    }
                />            

            </Grid>

        </div>

    )
}

export default Input;
