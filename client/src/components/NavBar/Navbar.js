import React, {useState, useEffect} from 'react'
import { AppBar, Avatar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';

// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import useStyles from './styles'
import Image from '../../assets/background/memories.png';

const Navbar = () => {
    
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authDetails')));

    console.log(user, " Why aint i logged in!!");

    // useEffect(() => {

    //     setUser(JSON.parse(localStorage.getItem('authDetails')))
    //     console.log(user, "\n\n", user.length);

    // }, []);


    // useEffect(() => {

    //     const isSessionToken = user?.tokenId;

    //     if (isSessionToken === true) {
            
    //         // if ()

    //         /*

    //             if (isSessionToken.) {

    //             }

    //          */

    //     }

    //     // setUser(JSON.parse(localStorage.getItem('authDetails')));

    // }, []);

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

                {
                    user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt = {user.profile.name} src = {user.profile.imageUrl}> {user?.profile?.name.charAt(0)} </Avatar>
                            <Typography className={classes.userName} varaint = "h6"> {user.profile.name} </Typography>
                            <Button variant = "contained" className={classes.logout}> Logout </Button>
                        </div>
                    ) : (
                        <Button variant = "contained" component = {Link} to = "/auth" color = "primary" > Sign In </Button>
                    )
                }

                </Toolbar>

        </AppBar>
    )
} 

export default Navbar;
