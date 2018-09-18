import {Component} from 'react';

import WeekButton from './WeekButton';

export default class Timeline extends Component{

    constructor(props){
        super(props);
        let className = "timeline";
        if(this.props.activeWeek!=null){
            className += " timeline-hidden";
        }
        this.state = {
            className: className
        }

    }

    render(){
        return (
            <div className={this.state.className}>
                <h1 className="title">DECO2200 Interface Design Studio: Process Journal</h1>
                <h2 className="subtitle">Connor G Meehan - cmee7240 - cmee7240@uni.sydney.edu.au</h2>
                <div className="week-container">
                    {Object.keys(this.props.posts).map( (weekPosts, i) => (
                        <WeekButton id={weekPosts[0].Week} week={weekPosts[0].Week} posts={weekPosts} weekChangeCallback={this.props.weekChangeCallback}/>
                    ) )}
                </div>
                <style jsx>{`
                    .timeline {
                        padding-top:100px;
                        text-align: center;
                    }
                    .week-container{
                        margin:100px;
                        display:flex;
                        flex-direction:left;
                        justify-content: space-evenly;
                    }
                    .title {
                        font-size: 1em;
                    }
                    .subtitle {
                        font-size: 0.8em;
                    }
                `}</style>
            </div>
        );
    }
}