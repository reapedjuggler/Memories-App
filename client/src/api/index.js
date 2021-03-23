import axios from 'axios';

// Not working for some reason so ignoring for now

// const api = axios.create({
//     baseUrl: 'http://localhost:8000'
// });

const url = "http://localhost:8000";

export const fetchPost = () => axios.get();

export const createPost = (newPost) => {
    // return axios.post(url, newPost);             // Forgot this " return "" mofo which costed me a day pfft :/
    return axios.post(url + '/index', newPost);
};

export const updatePost = (id, updatedPost) => {
    // return axios.patch(`${url}/${id}`, updatedPost);          // Earlier we were using this but we can simply put a baseUrl in axios to make things easier
    return axios.patch(url + `/index/${id}`, updatedPost); // because now we dont have only one single routes but many different routes  
};

export const deletePost = (id) => {
    // axios.delete(`/${url}/${id}`);
    return axios.delete(url + `/index/${id}`);
};

export const likePost = (id) => {
    // return axios.patch(`${url}/${id}/likePost`);
    return axios.patch(url + `/index/${id}/likePost`);
};

// Now the sign in and singout routes;;;;;;;

export const signIn = (postData) => {
    return axios.post(url + `/users/signin`, postData);
};

export const signUp = (formData) => {
    console.log(formData, " zzzzzz iam in axios\n\n");
    return axios.post(url + "/users/signup", formData);
};
