import React, {Component} from 'react';
import axios from 'axios'

import Timeline from '../components/Timeline'
import PostView from '../components/PostView'

export default class Index extends Component{
    _posts = [];
    constructor(props){
        super(props);
        const initialWeek = 0;
        const cachedPosts = 
        const weeks = Object.keys(this.props.posts);
        
        this.state = {
            posts: cachedPosts,
            activeWeek: initialWeek,
            activePost: null,
            activePosts: Object.keys(cachedPosts)[0],
        }
        this.changeWeek = this.changeWeek.bind(this);
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
                <Timeline posts={this.state.posts} activeWeek={this.state.activeWeek} weekChangeCallback={this.changeWeek}/>
                <PostView posts={this.props.activePosts} />
                <style jsx>{`
                * {
                    transition: 0.5s all;
                    font-family: 'Cormorant Garamond';
                }
                `}</style>
            </div>
        )
    }

    changeWeek(week){
        this.setState({activePosts: this.state.posts[Object.keys(this.state.posts)[week]], activeWeek: week});
        console.log(this.state);
    }
}