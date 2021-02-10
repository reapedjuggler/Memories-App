import {FETCH, CREATE, LIKE, DELETE, UPDATE} from './memoriesType';
import * as api from '../../api/index';

// these will be async actions fetching and updating the data;
// for details have a look at vishwas's videos

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPost();
        console.log(data, " iam val");
        dispatch({type: 'FETCH', payload: data});
        
    } catch (err) {
        console.log(err.message);
    }
}

export const createPost = (post) => async (dispatch) => {
   
    try {
        
        console.log(post, " \niam post in client\n\n");
        const { data } = await api.createPost(post);
        dispatch({type: 'POST', payload: data});

    } catch (err) {
        console.log(err.message);
    }
}