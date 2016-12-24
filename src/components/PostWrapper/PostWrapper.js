import React from 'react';
import './PostWrapper.css';

// function PostWrapper ({children}) {
//     return (
//         <div className="PostWrapper">
//             {children}
//         </div>
//     )
// }

// ES6 version
const PostWrapper = ({children}) => (
    <div className="PostWrapper">
        {children}
    </div>
)

export default PostWrapper;