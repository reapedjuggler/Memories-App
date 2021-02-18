import axios from 'axios';

const url = "http://localhost:8000/index";

export const fetchPost = () => axios.get(url);

export const createPost = (newPost) => {
    return axios.post(url, newPost);             // Forgot this " return "" mofo :/
};

export const updatePost = (id, updatedPost) => {
    return axios.patch(`${url}/${id}`, updatedPost);
};

export const deletePost = (id) => {
    axios.delete(`${url}/${id}`);
}

export const likePost = (id) => {
    return axios.patch(`${url}/${id}/likePost`);
}