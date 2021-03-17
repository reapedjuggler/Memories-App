import {SIGNUP, SIGNIN} from './memoriesType';
import * as api from '../../api/index';

export const signUp = ({formData, history}) => async (dispatch) => {

    try {
        console.log(formData, "  and ", history);
        // api.post('/auth/signup', formData);
    }

    catch (err) {
        console.log(err, " Iam err in Signup auth.js");
    }

}

export const signIn = ({formData, history}) => async (dispatch) => {
 
    try {
        console.log(formData, "  and ", history);
    }

    catch (err) {
        console.log(err, " Iam err in SignIn auth.js");
    }

};