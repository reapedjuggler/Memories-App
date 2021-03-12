import {AUTH, LOGOUT} from './memoriesType';

const memoryReducerAuth = (intialAuthState = {details: null}, action) => {

    switch (action.type) {
        case AUTH:
            // console.log(...action?.payload, " hurrayy I am payload\n\n")
            localStorage.setItem('authDetails', JSON.stringify({...action?.payload}));
            return {...intialAuthState, authData: action?.payload};
        case LOGOUT:
            console.log("F my life");     // just clear your local storage over here
            localStorage.clear();
            return {...intialAuthState, authData: null};
        default:
            return intialAuthState;
    }

}

export default memoryReducerAuth;