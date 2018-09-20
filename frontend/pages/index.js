import Component from 'react';
import fetch from 'isomorphic-unfetch';

import "../styles/style.less";

import Header from '../components/Header';
import PostView from '../components/PostView';

class Index extends Component {

}

const Index = withRouter((props) => {
    let weeks = [];
    // TODO: Make 1 line map function?
    props.posts.forEach( (post) => {
        if(!weeks.includes(post.Week)){
            weeks.push(post.Week);
        }
    });
    weeks.sort();
    return(
        <div className="app-root">
            <Header activeWeek={props.router.query.week} weeks={weeks}/>
            <PostView activeWeek={props.router.query.week} posts={props.posts} />
        </div>
    );
});

Index.getInitialProps = async ({req}) => {
    const res = await fetch('http://localhost:1337/post');
    const data = await res.json();
    return {posts: data};
}

export default Index;