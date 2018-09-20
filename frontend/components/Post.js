import Image from './Image';
const Post = (props) => (
    <div className="post">
        <div className="post-header">
        <h3>Week {props.data.Week} - {props.data.Title}</h3>
        <h5>{new Date(props.data.Date).toString()}</h5>
        </div>
        { props.data.HeaderImage && <Image src={props.data.HeaderImage.url} /> }
        <p>{props.data.P1}</p>
        { props.data.Image1 && <Image src={props.data.Image1.url} /> }
        {props.data.P2 &&         <p>{props.data.P2}</p> }
        { props.data.Image2 && <Image src={props.data.Image2.url} /> }
        {props.data.P3 &&         <p>{props.data.P3}</p> }
    </div>
)

export default Post;