import React from 'react';
import Post from './Post/Post';

const Posts = () => {
    return (
        <>  
            {/* Basically upper symbol is an alternative way to write React.fragment */}
            <h1>Iam post</h1>
            <Post />
            <Post />
        </>
    )
};

export default Posts;
