import {Component} from 'react';

export default class Post extends Component {
    constructor(props){
        super(props);
        const post = this.props.post;
        
        this.state = {
            _id: post._id,
            week: post.Week,
            title: post.Title,
            date: post.Date,
            headerImage: post.HeaderImage,
            para1: post.P1,
            image1: post.Image1,
            para2: post.P2,
            image2: post.Image2,
            para3: post.P3
        }
    }
    
    render(){
        return(
            <div className="post" id={this.state._id}>
                {this.state.title && <h3>Week {this.state.week} - {this.state.title}</h3> }
                {this.state.date && <h5>{this.state.date}</h5>}
                {this.state.headerImage && <img src={`http://localhost:1337/${this.state.headerImage.url}`}></img>}
                {this.state.para1 && <p>{this.state.para1}</p>}
                {this.state.image1 && <img src={`http://localhost:1337/${this.state.image1.url}`}></img>}
                {this.state.para2 && <p>{this.state.para2}</p>}
                {this.state.image2 && <img src={`http://localhost:1337/${this.state.image2.url}`}></img>}
                {this.state.para3 && <p>{this.state.para3}</p>}
                <style jsx>{`
                    .post{
                        margin:50px;
                    }
                `}</style>
            </div>
            // <div id={this.state._id} className="post">
            //     <h3>{this.state.title}</h3>
            //     {/* <h5>{post.Date}</h5> */}
            //     {this.state.HeaderImage.src !== null &&
            //         <img src={`http://localhost${this.state.HeaderImage.url}`} />
            //     }
            //     {/* <p>{post}</p> */}
            //     <p>{this.state.para1}</p>
            //     {this.state.para2 && 
            //         <p>{this.state.para2}</p>
            //     }
            //     {this.state.para3 && 
            //         <p>{this.state.para3}</p>
            //     }
            //     <style jsx>{`
            //         .post{
            //             margin: 50px;
            //         }
            //     `}</style>
            // </div>
        )
    }
}