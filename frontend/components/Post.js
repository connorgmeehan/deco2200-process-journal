import {Component} from 'react';

export default class Post extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div id={this.props._id} className="post">
                <h3>{this.props.title}</h3>
                <h5>{this.props.date}</h5>
                <p>{this.props.body}</p>
                <style jsx>{`
                    .post{
                        margin: 50px;
                    }
                `}</style>
            </div>
        )
    }
}