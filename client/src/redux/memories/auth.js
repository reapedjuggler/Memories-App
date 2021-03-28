import {SIGNUP, SIGNIN} from './memoriesType';
import * as api from '../../api/index';

export const signIn = ({formData, history}) => async (dispatch) => {
 
    try {
        
        // console.log(formData, "  and ", history);

        try {   
            
            const {data} = await api.signIn(formData);
            
            dispatch({type: "AUTH", payload: data})            
           
            history.push('/');
            
        } catch (err) {
            console.log(err);
        } 
    }

    catch (err) {
        console.log(err, " Iam err in SignIn auth.js");
    }

};  

export const signUp = ({formData, history}) => async (dispatch) => {    

    try {
        // console.log(formData, "  and ", history + " \nin signup");

        const {data} = await api.signUp(formData);

        // console.log(data, " I need SLEEP please\n");

        dispatch({type: "AUTH", payload: data})

        history.push('/');
    }

    catch (err) {
        console.log(err, " Iam err in Signup auth.js");
    }

}
