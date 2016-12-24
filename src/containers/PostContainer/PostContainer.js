import React from 'react';
import { PostWrapper, Navigate, Post } from '../../components';

class PostContainer extends React.Component {
    render() {
        return (
            <PostWrapper>
                <Navigate/>
                <Post/>
            </PostWrapper>
        );
    }
}

export default PostContainer;