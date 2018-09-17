import {Component} from 'react';

export default class WeekButton extends Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props);
        return(
            <div className="week-button">
                <span className="week-button-title">Week {this.props.posts[0].Week}</span>
                <style jsx>{`
                    .week-button {
                        border: 1px solid black;
                        cursor: pointer;
                        user-select: none;
                        -moz-user-select: none;
                        -khtml-user-select: none;
                        -webkit-user-select: none;
                        -o-user-select: none;
                    }
                `}</style>
            </div>
        )
    }
}