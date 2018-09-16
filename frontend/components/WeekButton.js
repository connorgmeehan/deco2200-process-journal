import {Component} from 'react';

export default class WeekButton extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="week-button">
                <span className="week-button-title">Week {this.props.week}</span>
                <style jsx>{`
                    .week-button {
                        border: 1px solid black;
                    }
                `}</style>
            </div>
        )
    }
}