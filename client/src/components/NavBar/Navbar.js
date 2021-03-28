import React, {useState, useEffect} from 'react'
import { AppBar, Avatar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router';
import decode from 'jwt-decode';

// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import useStyles from './styles'
import Image from '../../assets/background/memories.png';

const Navbar = () => {
    
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authDetails')));
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    // console.log(user, " Why aint i logged in!!");

    // useEffect(() => {

    //     setUser(JSON.parse(localStorage.getItem('authDetails')))
    //     console.log(user, "\n\n", user.length);

    // }, []);


    // we need to render this once we get a valid user so that it gets redirected to home from /auth

    const logOutUser = () => {

        dispatch({type: 'LOGOUT'})          

        // So basically we need two things to logout 
        // push the home route to the history

        // and set the user to null

        history.push('/');

        setUser(null);

    }

    useEffect(() => {

        // const token = user?.tokenId;

        // We need to implement the JWT over here
       
        console.log("\n----------------\n", user, "Iam the current user\n\n");

        const token = user?.token;

        if (token) {

            const checkExpires = decode(token);

            if (checkExpires.exp * 1000 < new Date().getTime()) {
                logOutUser();
            }

        } else {

            // For now we just need to keep him log in which is either way done!!!!!!

        }

        setUser(JSON.parse(localStorage.getItem('authDetails')));

        

    }, [location]);


    // useEffect(() => {

    // }, [user]);

    return (
        
        <AppBar className = {classes.appBar}  position="static" color = "inherit">

            <div className={classes.brandContainer}>
            
            <Button component = {Link} to = "/" >  
                <Typography className = {classes.heading} variant = "h3" align = "center"> 
                    HOME
                </Typography> 
            </Button>
                
                <img className = {classes.image} src = {Image} alt = "memories" height = "60"></img>

            </div>

            <Toolbar>

                {/*
                
                    Another problem which we are facing here is that cuz you're an idiot 
                    We'd set the profile name's to resp for a local signup and profile for google sign up/in

                    so then you need to conditionally render them


                */}

                {
                    user ? (

                        user?.resp ? (
                            
                            <div className={classes.profile}>
                                {console.log(user, "\n------------------\n I'm user in nav\n")}
                                <Avatar className={classes.purple} alt = {user?.resp?.name} src = {user?.resp?.imageUrl}> {user?.resp?.name.charAt(0)} </Avatar>
                                <Typography className={classes.userName} varaint = "h6"> {user?.resp?.name} </Typography>
                                <Button variant = "contained" className={classes.logout} onClick = {logOutUser}> Logout </Button>
                            </div>

                        ) : (

                            <div className={classes.profile}>
                                {console.log(user, "\n------------------\n I'm user in nav\n")}
                                <Avatar className={classes.purple} alt = {user?.profile?.name} src = {user?.profile?.imageUrl}> {user?.profile?.name.charAt(0)} </Avatar>
                                <Typography className={classes.userName} varaint = "h6"> {user?.profile?.name} </Typography>
                                <Button variant = "contained" className={classes.logout} onClick = {logOutUser}> Logout </Button>
                            </div>

                        )

                    ) : (
                        <Button variant = "contained" component = {Link} to = "/auth" color = "primary" > Sign In </Button>
                    )
                }

                </Toolbar>

        </AppBar>
    )
} 

export default Navbar;
