import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {

    const posts = useSelector((state) => state.memoryReducer)
    console.log(posts, " iam posts");

    return (
        <>  
            {/* Basically upper symbol is an alternative way to write React.fragment */}
            
            {
            }
            
            <h1>Iam post</h1>
            <Post />
            <Post />
        </>
    )
};

export default Posts;
