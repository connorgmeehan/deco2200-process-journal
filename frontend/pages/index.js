import {Component} from 'react';
import fetch from 'isomorphic-unfetch';

import "../styles/style.less";

import Header from '../components/Header';
import PostView from '../components/PostView';
import Modal from '../components/Modal';

class Index extends Component {
    constructor(props){
        super(props);
        
        let weeks = [];
        // TODO: Make 1 line map function?
        props.posts.forEach( (post) => {
            if(!weeks.includes(post.Week)){
                weeks.push(post.Week);
            }
        });
        this.weeks = weeks.sort();
        this.posts = props.posts;
        
        const defaultWeek = 0;

        this.state = {
            activeWeek: defaultWeek,
            activePosts: this.posts.filter(post => post.Week == defaultWeek),
            previousPosts: undefined,
            modalUrl: undefined
        }
        this.changeWeek = this.changeWeek.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    static async getInitialProps(){
        const res = await fetch('http://localhost:1337/post');
        const data = await res.json();
        return {posts: data};
    }

    render(){
        
        return (
            <div className="app-root">
                <Header activeWeek={this.state.activeWeek} weeks={this.weeks} changeWeekCallback={this.changeWeek}/>
                <PostView activeWeek={this.weeks.activeWeek} activePosts={this.state.activePosts} previousPosts={this.state.previousPosts} showModalCallback={this.showModal}/>
                <Modal url={this.state.modalUrl} showModalCallback={this.showModal} />
            </div>
        )
    }

    changeWeek(week){
        this.setState({
            activeWeek: week,
            activePosts: this.posts.filter(post => post.Week == week),
            previousPosts: this.state.activePosts
        })
    }

    showModal(url){
        console.log(`Index::showModal - ${url}`);
        this.setState({
            modalUrl: url,
        });
    }
}

export default Index;