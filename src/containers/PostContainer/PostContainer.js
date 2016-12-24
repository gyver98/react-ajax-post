import React from 'react';
import { PostWrapper, Navigate, Post } from '../../components';
import * as service from '../../services/post';

class PostContainer extends React.Component {
    
    fetchPostInfo = async (postId) => {
        // const post = await service.getPost(postId);
        // console.log(post);
        // const comments = await service.getComments(postId);
        // console.log(comments);
        
        //Promise.all style
        const info = await Promise.all([
            service.getPost(postId),
            service.getComments(postId)
        ]);
        console.log(info);
    }

    componentDidMount() {
        this.fetchPostInfo(1);
    }
    
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