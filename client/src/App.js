import React from 'react'
import { Container} from '@material-ui/core';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar';
import Auth from './components/Auth/Auth';

import './index.css';

const App = () => {

    return (
     
        <div>
            
            {/* Container for the App bar */}
            <BrowserRouter>
            
                <Container maxWidth = "lg">

                    <Navbar />

                    <Switch>
                        <Route exact path="/" component = {Home} />
                        <Route exact path="/auth" component = {Auth} />
                    </Switch>
                    
                    {/* <Home /> */}

                </Container>
            </BrowserRouter>
        </div>
    )
}

export default App;