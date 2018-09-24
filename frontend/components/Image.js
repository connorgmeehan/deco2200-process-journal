import { Component } from 'react';

class Image extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        return(
            <figure className="image-container" onClick={this.handleClick}>
                <img className="image" src={`http://localhost:1337/${this.props.url}`} />
            </figure>
        )
    }

    handleClick(){
        this.props.showModalCallback(this.props.url);
    }
}

export default Image;