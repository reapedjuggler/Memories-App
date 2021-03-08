import {FETCH, CREATE, LIKE, DELETE, UPDATE} from './memoriesType';
import * as api from '../../api/index';

// these will be async actions fetching and updating the data;
// for details have a look at vishwas's videos

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPost();
        // console.log(data, " iam val");
        dispatch({type: 'FETCH', payload: data});
        
    } catch (err) {
        console.log(err.message);
    }
}

export const createPost = (post) => async (dispatch) => {
   
    try {

        const { data } = await api.createPost(post);
        dispatch({type: CREATE, payload: data});

    } catch (err) {
        console.log(err.message);
    }
}

export const updatePost = (id, post) => async(dispatch) => {

    try {

        const ace = await api.updatePost(id, post);
        
        console.log(ace, "\nftw :D \n\n");

        const { data } = ace;
        dispatch({type: UPDATE, payload: data});
    }

    catch (err) {
        console.log(err.message);
    }
}

export const deletePost = (id) => async(dispatch) => {
    
    try {
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id})
    }

    catch (err) {
        console.log(err);
    }
};

export const likePost = (id) => async(dispatch) => {
    
    try {
        const { data } = await api.likePost(id);
        dispatch({type: 'LIKE', payload: data});   
    }
    catch (err) {

    }

}

// export const auth = ({finalResp}) => {

//     try {

//         disp

//     }

//     catch (err) {

//     }

// }