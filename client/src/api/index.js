import axios from 'axios';

const url = "http://localhost:8000/index";

export const fetchPost = () => axios.get(url);

export const createPost = (data) => {
    console.log(data, "\niam data in axios");
    axios.post(url, data);
};

export const updatePost = (id, updatedPost) => {
    axios.patch(`${url}/${id}`, updatedPost);
};

export const deletePost = (id) => {
    axios.delete(`${url}/${id}`);
}

export const likePost = (id) => {
    axios.patch(`${url}/${id}/likePost`);
}