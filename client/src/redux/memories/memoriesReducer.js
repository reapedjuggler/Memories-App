import { combineReducers } from 'redux';
import {FETCH, CREATE, LIKE, DELETE, UPDATE} from './memoriesType';

const initialState = {
    posts: [],
}

const memoryReducer =  (state = [], action) => {
    switch (action.type) {
        case FETCH:
            return state;
        case CREATE:
            return state;
        case LIKE:
            return state;
        case DELETE:
            return state;
        case UPDATE:
            return state;
    }   
};

export default memoryReducer;