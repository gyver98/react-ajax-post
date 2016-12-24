import React from 'react';
import './CommentList.css';
import {Comment} from '../';

const CommentList = () => (
    <ul className="CommentList">
        <Comment/>
        <Comment/>
        <Comment/>
    </ul>
);

export default CommentList;