import React from 'react'
import { Container} from '@material-ui/core';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar';
import Auth from './components/Auth/Auth';

import './index.css';

const App = () => {

    return (
     
        <div>
            
            {/* Container for the App bar */}
            <Router>
            
                <Container maxWidth = "lg">

                    <Navbar />


                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}

                {/* So thats why we need to  place differnt destinations for every component */}

                {/* 
                
                    We need exact keyword because it renders the first matching router so
                
                    for ex : /users
                             /users/create

                    if we want to go to create and as React Router uses partial matching and so it will
                    redirect it to users because it is the first partially matched route. 
                    
                    USING EXACT WILL CHECK FOR THE EXACT ROUTE
                    
                */}

                    <Switch>
                        <Route exact path="/" component = {Home} />
                        <Route exact path="/auth" component = {Auth} />
                    </Switch>
                    
                    {/* <Home /> */}

                </Container>
            </Router>
        </div>
    )
}

export default App;