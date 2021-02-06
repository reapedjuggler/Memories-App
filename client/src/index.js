import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

import App from './App';
import Reducers from './redux/memories/memoriesReducer';

const store = createStore(Reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(<App />, document.getElementById("root"));