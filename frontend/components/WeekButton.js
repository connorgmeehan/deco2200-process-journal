import PropTypes from 'prop-type';
import {Component} from 'react';

WeekButton.propTypes = {
    weekChangeCallback: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
}

export default class WeekButton extends Component {
    constructor(props){
        super(props);
    }

    render(){
        var handleClick = () => this.props.weekChangeCallback(this.props.posts[0].Week);
        return(
            <div className="week-button" onClick={handleClick}>
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