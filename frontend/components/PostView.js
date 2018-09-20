import React from 'react';
    
import Post from './Post';

const PostView = ({activeWeek, posts}) => {
    activeWeek = (activeWeek ? activeWeek : 0);
    const activePosts = posts.filter(post => post.Week == activeWeek);
    return (
        <div className="post-view">
            {activePosts && activePosts.map( (post, i) => (
                <Post data={post} key={i}/>
            ))}
        </div>
    )
}   

export default PostView;