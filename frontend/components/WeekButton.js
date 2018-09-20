import {Component} from 'react';
class WeekButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        console.log(this.props.isActive);
        let className = "week-button";
        if(this.props.isActive)
            className += " active";
        return(
            <div className={className} onClick={this.handleClick} >
                <span className="week-button-span">Week {this.props.week}</span>
            </div>
        )
    }

    handleClick() {
        this.props.changeWeekCallback(this.props.week);
    }
}

export default WeekButton;