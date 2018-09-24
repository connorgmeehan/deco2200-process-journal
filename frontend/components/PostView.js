import { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
    
import Post from './Post';

class PostView extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <ReactCSSTransitionGroup
                transitionName="drop-in"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                    <div className="post-view">
                        {this.props.activePosts && this.props.activePosts.map( (post, i) => (
                            <Post data={post} key={i} showModalCallback={this.props.showModalCallback}/>
                        ))}
                    </div>
                </ReactCSSTransitionGroup>

                    <div className="post-view">
                    {this.props.previousPosts && this.props.previousPosts.map( (post, i) => (
                        <Post data={post} key={i} showModalCallback={this.props.showModalCallback}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default PostView;