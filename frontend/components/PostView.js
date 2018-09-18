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
        console.log(this.props.posts);
        return(
            <div className={this.state.className}>
                {/* {this.props.posts.map( (post) => (
                    <Post post={post}/>
                ))} */}
            </div>
        )
    }
}