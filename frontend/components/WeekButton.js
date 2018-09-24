import {Component} from 'react';
class WeekButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        let className = "week-button";
        if(this.props.isActive)
            className += " week-button-active";


        let content = `Week ${this.props.week}`;
        if(this.props.week == 0)
            content = "Foreword";
        return(
            <div id={this.props.week} className={className} onClick={this.handleClick} >
                <span className="span">{content}</span>
            </div>
        )
    }

    handleClick() {
        this.props.changeWeekCallback(this.props.week);
    }
}

export default WeekButton;