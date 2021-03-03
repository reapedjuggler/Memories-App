import React from 'react'
import {Grid, Paper, Typography, Avatar, Container, TextField} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './Styles';

import Input from './Input/Input';

const Auth = () => {

    const isSignUp = true;
    const classes = useStyles();

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    return (
        <div>

            <Container component = "main" maxWidth = "xs">

                <Paper className={classes.paperContainer} elevation = {3}>

                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                
                    <Typography variant = "h5"> {isSignUp ? 'Sign In' : 'Sign Up'} </Typography>

                    <form className={classes.form} onSubmit={handleSubmit}>
                    
                        <Grid container spacing = {2} >



                            {

                                isSignUp ? (

                                    <>

                                    </>
                                
                                ) : (
                                
                                    <>
                                        <Input required label = "First Name" name = "FirstName" type = "text" handleChange={handleChange}  />                                
                                        <Input label = "Last Name" name = "LastName" type = "text" handleChange={handleChange} />
                                        <Input label = "E-mail" type = "email" name = "email" handleChange={handleChange}/>
                                        <Input label = "Pass-Word" type = "password" name = "password" handleChange={handleChange} />
                                        <Input label = "Confirm Pass-Word" type = "password" name = "password" handleChange={handleChange} />
                                    </>
                                
                                )

                            }

                        </Grid>
                    
                    </form>
                
                </Paper>

            </Container>

        </div>
    )
}

export default Auth;
