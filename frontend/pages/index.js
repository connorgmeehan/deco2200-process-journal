import React, {Component} from 'react';
import axios from 'axios'
import _ from 'lodash';

import Timeline from '../components/Timeline'
import PostView from '../components/PostView'

export default class Index extends Component{
    constructor(props){
        super(props);

        this._posts = _.groupBy(this.props.posts, 'week');
        
        this.state = {
            posts: this._posts,
            activeWeek: null,
            activePost: null,
        }
    }

    static async getInitialProps(){
        const url = 'http://localhost:1337/post';
        const response = await axios(url);
        return await {
            posts: response.data,
        }
    }

    render(){
        return (
            <div>
                <Timeline weekCallback={this.changeWeek} posts={this._posts} activeWeek={this.state.activeWeek} />
                <PostView posts={this.props.posts} />
                <style jsx>{`
                * {
                    transition: 0.5s all;
                    font-family: 'Garamond';
                }
                `}</style>
            </div>
        )
    }

    changeWeek(week){
        this.setState({posts: this._posts[week], activeWeek: week});
    }
}