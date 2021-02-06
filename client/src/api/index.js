import React from 'react';
import axios from 'axios';

const url = "http://localhost:8000/index";

const fetchPost = () => axios.get(url);

export default fetchPost;