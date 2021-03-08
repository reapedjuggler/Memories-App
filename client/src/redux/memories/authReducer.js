import {AUTH, LOGOUT} from './memoriesType';

const memoryReducerAuth = (intialAuthState = {payload: null}, action) => {

    switch (action.type) {
        case AUTH:
            console.log(...action.payload, " hurrayy I am payload\n\n");
            localStorage.setItem('authDetails', JSON.stringify(...action?.payload));
        case LOGOUT:
            console.log("F my life");
        default:
            return intialAuthState;
    }

}

export default memoryReducerAuth;