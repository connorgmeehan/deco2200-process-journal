import {Component} from 'react';
import Timeline from './Timeline';

class Header extends Component {

    threshold = 75;

    constructor(props){
        super(props);

        this.state = {
            isTop: true
        }
    }

    render(){
        return(
            <div className={`header${(this.state.isTop ? " header-expanded" : " header-mini")}`}>
                <div className="header-title-primary">
                    <h1>DECO2200: Process Journal</h1>
                </div>
                <div className="header-title-secondary">
                    <h2>Connor Guy Meehan</h2>
                    <h3>cmee7240@uni.sydney.edu.au</h3> 
                </div>
                <Timeline activeWeek={this.props.activeWeek} weeks={this.props.weeks} changeWeekCallback={this.props.changeWeekCallback}/>
            </div>
        )
    }

    componentDidMount(){
        document.addEventListener('scroll', () => {
            const isTop = (window.scrollY < this.threshold);
            if(isTop !== this.state.isTop){
                this.setState({isTop: isTop});
            }
        });
    }
}


export default Header;