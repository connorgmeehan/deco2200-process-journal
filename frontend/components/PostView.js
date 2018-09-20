import React from 'react';
    
import Post from './Post';

const PostView = ({activeWeek, activePosts}) => {
    activeWeek = (activeWeek ? activeWeek : 0);
    return (
        <div className="post-view">
            {activePosts && activePosts.map( (post, i) => (
                <Post data={post} key={i}/>
            ))}
        </div>
    )
}   

export default PostView;