import {Component} from 'react';

import Post from './Post';

export default class PostView extends Component {

    constructor(props){
        super(props);
        this.state = {
            className: "post-view"
        }
    }

    render(){
        return(
            <div className={this.state.className}>
                {this.props.posts.map( (post) => (
                    <Post date={post.publish_date} week={post.week} title={post.title} body={post.body}/>
                ))}
            </div>
        )
    }
}