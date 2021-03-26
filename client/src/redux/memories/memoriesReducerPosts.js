import {FETCH, CREATE, LIKE, DELETE, UPDATE, AUTH} from './memoriesType';

const initialState = {
    posts: [],
}

const memoryReducer =  (state = [], action) => {
    switch (action.type) {
        
        case FETCH:
            // console.log(action.payload, " iam payload\n\n");
            return action.payload;
        case CREATE:
            return [...state, action.payload];
        case LIKE:
            return state.map((post) => post._id === action.payload._id ? action.payload: post)
        case DELETE:
            return state.filter((post) => post._id !== action.payload);
        case UPDATE:
            return state.map((post) => post._id === action.payload._id ? action.payload: post);
        default:
            return state;
    }   
};

export default memoryReducer;