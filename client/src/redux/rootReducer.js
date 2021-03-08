import { combineReducers } from 'redux';

import memoryReducer from './memories/memoriesReducerPosts';
import memoryReducerAuth from './memories/authReducer';

export default combineReducers ({
    memoryReducer,
    memoryReducerAuth,
})