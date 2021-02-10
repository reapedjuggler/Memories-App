import {FETCH, CREATE, LIKE, DELETE, UPDATE} from './memoriesType';

const initialState = {
    posts: [],
}

const memoryReducer =  (state = [], action) => {
    switch (action.type) {
        case FETCH:
            console.log(action.payload, " iam payload\n\n");
            return action.payload;
        case CREATE:
            return state;
        case LIKE:
            return state;
        case DELETE:
            return state;
        case UPDATE:
            return state;
        default:
            return state;
    }   
};

export default memoryReducer;