import axios from 'axios';

const url = "http://localhost:8000/index";

export const fetchPost = () => axios.get(url);