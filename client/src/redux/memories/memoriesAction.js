import {FETCH, CREATE, LIKE, DELETE, UPDATE} from './memoriesType';
import * as api from '../../api/index';

// these will be async actions fetching and updating the data;
// for details have a look at vishwas's videos

export const getPost = () => async () => {

    try {
        const { val } = await api.fetchPost();
    } catch (err) {
        console.log(err.message);
    }
}

export const createPost = () => async () => {
    try {
        const { val } = await api.createPost();
    } catch (err) {
        console.log(err.message);
    }
}