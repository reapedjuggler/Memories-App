import { combineReducers } from 'redux';

import memoryReducer from './memories/memoriesReducer';

export default combineReducers ({
    post: memoryReducer,
})