import React, {useState, useEffect} from 'react'
import {Grid, Paper, Typography, Avatar, Container, TextField, Button} from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch } from 'react-redux';

import useStyles from './Styles';

import Input from './Input/Input';
import Icon from './Icon';

const Auth = () => {

    const [isLog, setIsLog] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();           // setting a ref to useDispatch so that we can fire an action directly from here

    const sucResponseGoogle = async (response) => {
    
        console.log("Yay Success!");

        console.log(response); 

        const tokenId = response?.tokenId;
        const profile = response?.profileObj;

        // console.log(profile, " \n\n", tokenId);
    
        const finalResp = {result: profile, tokenId: tokenId};

        // dispatch({type: 'AUTH', payload: {profile, tokenId}});
        
        dispatch ({type: 'AUTH', payload: {profile, tokenId}});

    }

    const failResponseGoogle = () => {
        console.log("Oops! Some Error occurred while signing In, Please Try again later")
    }

    // useEffect (() => {
    //     // changeVisibility();
    //     setIsLog(true);
    // }, []);

    const showPass = () => {

    };

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };
    // const 

    
    const changeVisibility = () => {
        // console.log(prevIsLog, "  iam prev state\n");
        setIsLog(prevIsLog => !prevIsLog);                      // because setter function  
    }

    return (
        <div>

            <Container component = "main" maxWidth = "xs">

                <Paper className={classes.paperContainer} elevation = {3}>

                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                
                    <Typography variant = "h5"> {isLog ? 'Sign In' : 'Sign Up'} </Typography>

                    <form className={classes.form} onSubmit={handleSubmit}>
                    
                        <Grid container spacing = {3} >

                        <Input label = "E-mail" type = "email" name = "email" handleChange={handleChange}/>
                        <Input label = "Pass-Word" type = "password" name = "password" handleChange={handleChange} />

                            {

                                isLog ? (

                                    <>
                                    {/* <Container> </Container> */}
                                    <Container  maxWidth = "sm">
                                     
                                        <Grid  spacing = {4} container>
                                            
                                            <Grid item xs = {12} sm = {6} md = {6} >
                                            
                                                <Typography variant = "h5" color = "primary" className={classes.signInOpt}> Not Signed Up ?</Typography>  

                                            </Grid>
                                        
                                            <Grid item xs = {12} sm = {6} md = {6}>
                                        
                                                <Button variant = "contained" color = "primary" onClick = {changeVisibility}> Sign Up </Button>

                                            </Grid>
                                        
                                        </Grid>

                                        <Grid spacing = {4} container>

                                            <Grid item xs = {12} sm = {6} md = {6}>
                                                <Typography color = "primary" variant = "h5" className={classes.signInOpt}> Google Login </Typography>
                                            </Grid>

                                            <Grid item xs = {12} sm = {6} md = {6}>
                                               
                                                <GoogleLogin 
                                                    
                                                    clientId="552427160690-1ueaio7dhhcelo94jk8c8g8qml2ilo5c.apps.googleusercontent.com"
                                                    className={classes.signInOpt}
                                                    buttonText="Login"
                                                    onSuccess={sucResponseGoogle}
                                                    onFailure={failResponseGoogle}
                                                    cookiePolicy={'single_host_origin'}
                                                    
                                                    render = {renderProps => (
                                                    
                                                        <Button 
                                                        className={classes.signUpBtn} 
                                                        variant = "contained" 
                                                        color = "primary"
                                                        startIcon = { <Icon /> } 
                                                        onClick={renderProps.onClick} 
                                                        disabled={renderProps.disabled}> 
                                                          
                                                            G-Login 
                                                        
                                                        </Button>
                                                    
                                                    )}

                                                />                                            
                                            
                                            </Grid>

                                        </Grid>

                                      </Container>
                                    </>
                                 
                                ) : (
                                
                                    <>
                                        <Grid container>
                                            <Grid item>
                                            <Input required label = "First Name" name = "FirstName" type = "text" handleChange={handleChange}  />                                
                                            </Grid>
                                            <Grid item>
                                            <Input required label = "Last Name" name = "LastName" type = "text" handleChange={handleChange} />
                                            </Grid>
                                            <Input required label = "Confirm Pass-Word" type = "password" name = "Confirm Password" handleChange={showPass} />
                                            
                                            <div className = {classes.divEle}>
                                            <Button size = "large" variant = "contained" color = "primary"> Submit </Button>  
                                            </div>
                                            
                                            <p> <p> &nbsp;&nbsp; </p> </p>                 

                                            <Typography className = {classes.signedUp} variant = "h5" color = "yellow"> &nbsp;&nbsp; <b> Signed Up Already ?&nbsp;&nbsp;&nbsp;&nbsp; </b> </Typography>
                                            <Button size = "large" variant = "contained" color = "primary" onClick = {changeVisibility} > Sign In </Button>  
                                        </Grid>
                                    </>
                                
                                )

                                    /*
                                            <Grid item xs = {6}>
                                        
                                            <GoogleLogin 
                                            
                                                clientId="Reaped"
                                                className={classes.signInOpt}
                                                buttonText="Login"
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                cookiePolicy={'single_host_origin'}  

                                            />
                                        </Grid>
                                     */ 

                            }

                        </Grid>
                    
                    </form>
                
                </Paper>

            </Container>

        </div>
    )
}

export default Auth;

