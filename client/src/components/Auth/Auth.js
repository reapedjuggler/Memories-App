import React, {useState, useEffect} from 'react'
import {Grid, Paper, Typography, Avatar, Container, TextField, Button} from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import {signUp, signIn} from '../../redux/memories/auth';

import useStyles from './Styles';

import Input from './Input/Input';
import Icon from './Icon';

const Auth = () => {

    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cnfpassword: ''  
    };

    const [isLog, setIsLog] = useState(true);
    const classes = useStyles();
    const dispatch = useDispatch();           // setting a ref to useDispatch so that we can fire an action directly from here
    const history = useHistory();
    const [formData, setFormData] = useState(initialFormData);
    // console.log(initialFormData, " Iam form data \n\n");

    const sucResponseGoogle = async (response) => {
    
        console.log("Yay Success!");
        // console.log(response); 

        const tokenId = response?.tokenId;
        const profile = response?.profileObj;

        // const finalResp = {result: profile, tokenId: tokenId};

        try {
            
            console.log("Ok working googgle sign in front-end\n\n");
            dispatch ({type: 'AUTH', payload: {profile, tokenId}});
            history.push('/');

        }

        catch (err) {
            console.log(err, "Iam err in google success\n\n");
        }

    }

    const failResponseGoogle = (resp) => {
        console.log("Oops! Some Er  ror occurred while signing In, Please Try again later")
        console.log(resp, " Iam error in google fail\n\n");
    }

    // useEffect (() => {
    //     // changeVisibility();
    //     setIsLog(true);
    // }, []);

    const showPass = () => {

    };

    const handleSubmit = (e) => {

        // e.preventDefault();          // Because React's default behaviour is to refresh the page when a form gets submitted;
        // console.log(formData, "  Iam form data after update\n\n");

        if (isLog) 
            dispatch(signIn({formData, history}));
        else {
            dispatch(signUp({formData, history}));
        }

    };
 
    /*  IMP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  */

    // To get the field of which you're updating the value we have a keyword named e.target.name

    const handleChange = (e) => {
        e.preventDefault();
        
        // const fieldNeedToBeUpdated = e.target.name;
        
        // console.log(e.target.value,  " --- ", e.target.name, " Iam event \n\n\n");

        /* 
            We cant use fieldNeedToBeUpdated as it is because It will create a new field with that name 
        
            And on the Contrary we want to update a particular field so we need to specify it in the below given manner inside [  ] these brackets;
        
        */

        // console.log(e.target.name);    

        setFormData({...formData, [e.target.name]: e.target.value});
    };
    


    
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
                                     
                                        <div className = {classes.divEleSignIn}>
                                            <Typography variant = "h5"> 
                                                <Button variant = "contained" color = "primary" onClick={handleSubmit} >    
                                                   Sign In 
                                                </Button>
                                            </Typography>
                                        </div>

                                        <br />
                                        <br />
                                        <br />

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

                                        <Grid  spacing = {4} container>
                                            
                                            <Grid item xs = {12} sm = {6} md = {6} >
                                            
                                                <Typography variant = "h6" color = "primary" className={classes.signInOpt}> Not Signed Up ?</Typography>  

                                            </Grid>
                                        
                                            <Grid item xs = {12} sm = {6} md = {6}>
                                        
                                                <Button variant = "contained" color = "primary" onClick = {changeVisibility}> Sign Up </Button>

                                            </Grid>
                                        
                                        </Grid>

                                      </Container>
                                    </>
                                 
                                ) : (
                                
                                    <>
                                        <Grid container>
                                            <Grid item>
                                            
                                            <Input required label = "First Name" name = "firstName" type = "text" handleChange={handleChange}  />                                
                                            
                                            </Grid>
                                            
                                            <Grid item>
                                            
                                            <Input required label = "Last Name" name = "lastName" type = "text" handleChange={handleChange} />
                                            
                                            </Grid>
                                            
                                            {/* Below field Not Needed as we have rendered it eitherway */}

                                            {/* <Input required label = "Pass-Word" type = "cnfPassword" name = "Confirm Password" handleChange={showPass} /> */}
                                            
                                            <Input required label = "Confirm Pass-Word" type = "password" name = "cnfpassword" handleChange={handleChange} />
                                            
                                            <div className = {classes.divEle}>
                                            <Button size = "large" variant = "contained" color = "primary" onClick = {handleSubmit}> Submit </Button>  
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

